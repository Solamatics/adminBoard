import React from "react";
import "./widgetSmall.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">Newly Added Member</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img
            src="https://images.unsplash.com/photo-1583760919595-270997d7726a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80"
            alt="avatar"
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallBtn">
            <VisibilityOutlinedIcon className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.unsplash.com/photo-1583760919595-270997d7726a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80"
            alt="avatar"
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallBtn">
            <VisibilityOutlinedIcon className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.unsplash.com/photo-1583760919595-270997d7726a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80"
            alt="avatar"
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallBtn">
            <VisibilityOutlinedIcon className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.unsplash.com/photo-1583760919595-270997d7726a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80"
            alt="avatar"
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallBtn">
            <VisibilityOutlinedIcon className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://images.unsplash.com/photo-1583760919595-270997d7726a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80"
            alt="avatar"
            className="widgetSmallImage"
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallBtn">
            <VisibilityOutlinedIcon className="widgetSmallIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
