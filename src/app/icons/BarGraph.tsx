function BarGraphIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 80 80"
        >
            <g stroke="#0891B2" strokeWidth="5" clipPath="url(#clip0_1_1478)">
                <path strokeLinecap="round" d="M73.3 73.3H6.7"></path>
                <path
                    strokeOpacity="0.5"
                    d="M70 73.3v-25a5 5 0 00-5-5H55a5 5 0 00-5 5v25"
                ></path>
                <path d="M50 73.3V16.7c0-4.7 0-7.1-1.5-8.6-1.4-1.4-3.8-1.4-8.5-1.4s-7 0-8.5 1.4C30 9.6 30 12 30 16.7v56.6"></path>
                <path
                    strokeOpacity="0.5"
                    d="M30 73.3V31.7a5 5 0 00-5-5H15a5 5 0 00-5 5v41.6"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_1_1478">
                    <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
                </clipPath>
            </defs>
        </svg>
    );
}

export default BarGraphIcon;
