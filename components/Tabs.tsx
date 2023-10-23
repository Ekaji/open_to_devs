'use client'
import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {/* Tabs navigation */}
      <ul className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0" role="tablist">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            role="presentation"
            className={`flex-grow basis-0 text-center hover:border-[#BEADFA] hover:border-b-2 ${tab.id === activeTab ? 'active border-b-2 bg-[#FF9B9B]/50 border-[#BEADFA]' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <button
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4
              text-xs font-medium uppercase leading-tight
              text-neutral-500 hover:isolate hover:border-transparent
               focus:isolate focus:border-transparent"
              role="tab"
              aria-controls={tab.id}
              aria-selected={tab.id === activeTab ? 'true' : 'false'}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tabs content */}
      <div className="mb-6">
        {tabs.map((tab) =>  (
            tab.id === activeTab && (
            <div
            key={tab.id}
            className={` duration-150 ease-linear`
            }
            // id={tab.id}
            role="tabpanel"
            aria-labelledby={tab.id}
          >
            {tab.content}
          </div>
            )
        )
        )}
      </div>
    </div>
  );
};

export default Tabs;
