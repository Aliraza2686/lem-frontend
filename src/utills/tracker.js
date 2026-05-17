const trackVisit = async () => {
    const ua = navigator.userAgent;

    const device = /Mobi|Android/i.test(ua) ? 'Mobile' :
        /Tablet|iPad/i.test(ua) ? 'Tablet' : 'Desktop';

    const browser = /Edg/i.test(ua) ? 'Edge' :
        /Chrome/i.test(ua) ? 'Chrome' :
            /Firefox/i.test(ua) ? 'Firefox' :
                /Safari/i.test(ua) ? 'Safari' : 'Other';

    const os = /Windows/i.test(ua) ? 'Windows' :
        /Mac/i.test(ua) ? 'Mac' :
            /Linux/i.test(ua) ? 'Linux' :
                /Android/i.test(ua) ? 'Android' :
                    /iPhone|iPad/i.test(ua) ? 'iOS' : 'Other';

    try {
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/visitors/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                device, browser, os,
                page: window.location.pathname,
                referrer: document.referrer || 'Direct'
            })
        });
    } catch (e) {
        console.info(e,"info")
    }
};

export default trackVisit;