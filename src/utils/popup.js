export const createPopup =(url) => {
  const attributes = 'height=300,width=700,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes';
  const popupWindow = window.open(url,'OSMAuth', attributes);
  return popupWindow;
};
