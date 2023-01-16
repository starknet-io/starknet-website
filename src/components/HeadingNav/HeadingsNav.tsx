// export const HeadingsItems = ({ headings, activeId }) => (
//   <ul>
//     {headings.map((heading) => (
//       <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
//         <a
//           href={`#${heading.id}`}
//           onClick={(e) => {
//             e.preventDefault();
//             document.querySelector(`#${heading.id}`).scrollIntoView({
//               behavior: "smooth",
//             });
//           }}
//         >
//           {heading.title}
//         </a>
//         {heading.items.length > 0 && (
//           <ul>
//             {heading.items.map((child) => (
//               <li
//                 key={child.id}
//                 className={child.id === activeId ? "active" : ""}
//               >
//                 <a
//                   href={`#${child.id}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     document.querySelector(`#${child.id}`).scrollIntoView({
//                       behavior: "smooth",
//                     });
//                   }}
//                 >
//                   {child.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))}
//   </ul>
// );

export {};
