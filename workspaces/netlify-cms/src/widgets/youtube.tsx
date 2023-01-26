import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  WidgetPreviewContainer,
  colors,
  lengths,
  ObjectWidgetTopBar,
  // @ts-expect-error
} from "netlify-cms-ui-default";
import { CmsWidgetControlProps } from "netlify-cms-core";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import { ClassNames } from "@emotion/core";
import { List, Map as iMap } from "immutable";
// @ts-expect-error
import { stringTemplate } from "netlify-cms-lib-widgets";

const styleStrings = {
  nestedObjectControl: `
    padding: 6px 14px 14px;
    border-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `,
  objectWidgetTopBarContainer: `
    padding: 0 14px;
  `,
  collapsedObjectControl: `
    display: none;
  `,
};

class Control extends React.Component<any, any> {
  componentValidate = {};

  static propTypes = {
    onChangeObject: PropTypes.func.isRequired,
    onValidateObject: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
      PropTypes.bool,
    ]),
    field: PropTypes.object,
    forID: PropTypes.string,
    classNameWrapper: PropTypes.string.isRequired,
    forList: PropTypes.bool,
    controlRef: PropTypes.func,
    editorControl: PropTypes.elementType.isRequired,
    resolveWidget: PropTypes.func.isRequired,
    clearFieldErrors: PropTypes.func.isRequired,
    fieldsErrors: ImmutablePropTypes.map.isRequired,
    hasError: PropTypes.bool,
    t: PropTypes.func.isRequired,
    locale: PropTypes.string,
  };

  static defaultProps = {
    value: iMap(),
  };

  constructor(props: { field: { get: (arg0: string, arg1: boolean) => any } }) {
    super(props);
    this.state = {
      collapsed: props.field.get("collapsed", false),
    };
  }

  /*
   * Always update so that each nested widget has the option to update. This is
   * required because ControlHOC provides a default `shouldComponentUpdate`
   * which only updates if the value changes, but every widget must be allowed
   * to override this.
   */
  shouldComponentUpdate() {
    return true;
  }

  validate = () => {
    const { field } = this.props;
    let fields = field.get("field") || field.get("fields");
    fields = List.isList(fields) ? fields : List([fields]);
    fields.forEach((field: any) => {
      if (field.get("widget") === "hidden") return;

      // @ts-expect-error
      this.componentValidate[field.get("name")]();
    });
  };

  controlFor(field: any, key?: any) {
    const {
      value,
      onChangeObject,
      onValidateObject,
      clearFieldErrors,
      metadata,
      fieldsErrors,
      editorControl: EditorControl,
      controlRef,
      parentIds,
      isFieldDuplicate,
      isFieldHidden,
      locale,
    } = this.props;

    if (field.get("widget") === "hidden") {
      return null;
    }
    const fieldName = field.get("name");
    const fieldValue =
      value && iMap.isMap(value) ? value.get(fieldName) : value;

    const isDuplicate = isFieldDuplicate?.(field);
    const isHidden = isFieldHidden?.(field);

    return (
      <EditorControl
        key={key}
        field={field}
        value={fieldValue}
        onChange={onChangeObject}
        clearFieldErrors={clearFieldErrors}
        fieldsMetaData={metadata}
        fieldsErrors={fieldsErrors}
        onValidate={onValidateObject}
        processControlRef={controlRef?.bind(this)}
        controlRef={controlRef}
        parentIds={parentIds}
        isDisabled={isDuplicate}
        isHidden={isHidden}
        isFieldDuplicate={isFieldDuplicate}
        isFieldHidden={isFieldHidden}
        locale={locale}
      />
    );
  }

  handleCollapseToggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  renderFields = (multiFields: any[], singleField: any) => {
    if (multiFields) {
      return multiFields.map((f, idx) => this.controlFor(f, idx));
    }
    return this.controlFor(singleField);
  };

  objectLabel = () => {
    const { value, field } = this.props;
    const label = field.get("label", field.get("name"));
    const summary = field.get("summary");
    return summary
      ? stringTemplate.compileStringTemplate(summary, null, "", value)
      : label;
  };

  render() {
    const { field, forID, classNameWrapper, forList, hasError, t } = this.props;
    const collapsed = forList ? this.props.collapsed : this.state.collapsed;
    const multiFields = field.get("fields");
    const singleField = field.get("field");

    if (multiFields || singleField) {
      return (
        <ClassNames>
          {({ css, cx }) => (
            <div
              id={forID}
              className={cx(
                classNameWrapper,
                css`
                  ${styleStrings.objectWidgetTopBarContainer}
                `,
                {
                  [css`
                    ${styleStrings.nestedObjectControl}
                  `]: forList,
                },
                {
                  [css`
                    border-color: ${colors.textFieldBorder};
                  `]: forList ? !hasError : false,
                },
              )}
            >
              {forList ? null : (
                <ObjectWidgetTopBar
                  collapsed={collapsed}
                  onCollapseToggle={this.handleCollapseToggle}
                  heading={collapsed && this.objectLabel()}
                  t={t}
                />
              )}
              <div
                className={cx(
                  {
                    [css`
                    ${styleStrings.collapsedObjectControl}
                  `]: collapsed,
                  },
                  css`margin-bottom: 14px`,
                )}
              >
                {this.renderFields(multiFields, singleField)}
              </div>
            </div>
          )}
        </ClassNames>
      );
    }

    return <h3>No field(s) defined for this widget</h3>;
  }
}

function Preview({ field }: { field?: any }) {
  <WidgetPreviewContainer>
    {field?.get("fields") || field?.get("field") || null}
  </WidgetPreviewContainer>;
}

function Widget(opts = {}) {
  return {
    name: "youtube",
    controlComponent: Control,
    previewComponent: Preview,
    schema: {
      properties: {
        collapsed: { type: "boolean" },
        i18n: { type: "boolean" },
      },
    },
    ...opts,
  };
}

export const NetlifyCmsWidgetYouTube = {
  Widget,
  controlComponent: Control,
  previewComponent: Preview,
};

export default NetlifyCmsWidgetYouTube;
