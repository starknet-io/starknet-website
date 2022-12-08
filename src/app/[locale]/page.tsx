'use client';

import {useTranslations} from 'next-intl';
import { PageLayout } from '../../components/Layout';


export default function Index() {
  const t = useTranslations();

  return (
    <PageLayout>
      <p>{t('search')}</p>
    </PageLayout>
  );
}
