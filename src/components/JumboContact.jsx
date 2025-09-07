import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

export const JumboContact = () => {
  return (
    <div className="flex justify-between items-center flex-wrap bg-gradient-to-r from-green-600 to-emerald-700 p-2 text-white ">
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center">
          <div>
            <PhoneIcon className="w-4 h-4" />
          </div>
          <div>+92306 9302960</div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <MailIcon className="w-4 h-4" />
          </div>
          <div>alismevn@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
