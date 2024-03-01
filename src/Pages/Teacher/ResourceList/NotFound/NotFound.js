import React from "react";
import './NotFound.css';

function NotFound() {
  const imgUrl =
    "https://chat.google.com/room/AAAA9IM2AaA/NKU-up2_dok/NKU-up2_dok?cls=10";
  return (
    <div>
      <div>
        <div class="empty-state">
          <div class="empty-state__content">
            <div class="empty-state__icon">
              <img src={imgUrl} alt="No Data Found!!" />
            </div>
            <div class="empty-state__message">
              No records has been added yet.
            </div>
            <div class="empty-state__help">
              Add a new record by simpley clicking the button on top right side.
            </div>
          </div>
        </div>

        <div class="credit">
          Illustration by{" "}
          <a href="https://icons8.com/" target="_blank">
            ICONS8
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default NotFound;
