
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

function CounterUpCom({ endValue = 0, sectionSelect }) {
    const [showCount, setShowCount] = useState(false);
    useEffect(() => {
        const rec = document.getElementById(sectionSelect);
        if (rec) {
            window.addEventListener('scroll', () => {
                const currentScrollPosition =
                    window.pageYOffset || document.documentElement.scrollTop;
                if (currentScrollPosition > 400 ) {
                    setShowCount(true);
                }
            });
        }
    }, [sectionSelect, showCount]);
    return <>{showCount ? <CountUp delay={0} duration={3} end={endValue} /> : 0}</>;
}

export default CounterUpCom;
