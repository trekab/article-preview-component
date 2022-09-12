const share = document.getElementById("share-1");
const hideShare = document.getElementById("share-2");
const authorDetails = document.getElementsByClassName("author")[0];
const shareOptions = document.getElementsByClassName("share-wrapper")[0];

const displayShareOptions = () => {
  authorDetails.classList.add("d-none");
  shareOptions.classList.remove("d-none");
};

const hideShareOptions = () => {
  authorDetails.classList.remove("d-none");
  shareOptions.classList.add("d-none");
};

share.addEventListener("click", displayShareOptions);
hideShare.addEventListener("click", hideShareOptions);
