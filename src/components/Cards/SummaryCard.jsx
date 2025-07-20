import React from 'react';
import { LuTrash2 } from 'react-icons/lu';
import { getInitials } from '../../utils/helper';

const SummaryCard = ({
    colors,
    role,
    topicsToFocus,
    experience,
    questions,
    description,
    lastUpdated,
    onSelect,
    onDelete,
}) => {
    return (
        <div
            className="bg-[#1f1f2e] border border-gray-700 rounded-xl p-3 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-300 relative group"
            onClick={onSelect}
        >
            <div
                className="rounded-lg p-4 relative"
                style={{
                    background: colors?.bgcolor || '#2c2c3e',
                }}
            >
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center">
                        <span className="text-lg font-semibold text-blue-400">
                            {getInitials(role)}
                        </span>
                    </div>

                    <div className="flex-grow text-black">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-md font-semibold">{role}</h2>
                                <p className="text-xs text-gray-800">{topicsToFocus}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className="hidden group-hover:flex items-center gap-2 text-xs text-rose-400 font-medium bg-rose-900/30 px-3 py-1 rounded border border-rose-700 absolute top-2 right-2 hover:bg-rose-800/50 transition"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                >
                    <LuTrash2 />
                </button>
            </div>

            <div className="px-3 pb-3 mt-2">
                <div className="flex items-center flex-wrap gap-2">
                    <span className="text-[11px] font-medium text-blue-300 bg-gray-800 px-3 py-1 rounded-full">
                        Experience: {experience} {experience === 1 ? 'Year' : 'Years'}
                    </span>

                    <span className="text-[11px] font-medium text-purple-300 bg-gray-800 px-3 py-1 rounded-full">
                        {questions} Q&A
                    </span>

                    <span className="text-[11px] font-medium text-teal-300 bg-gray-800 px-3 py-1 rounded-full">
                        Last Updated: {lastUpdated}
                    </span>
                </div>

                <p className="text-[13px] text-gray-400 mt-3 line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SummaryCard;
