// // components/Modal.js

// import { useState } from 'react';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         <button className="close-button" onClick={onClose}>
//           Close
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

