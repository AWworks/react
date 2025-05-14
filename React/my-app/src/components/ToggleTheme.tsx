import { useState } from 'react';

const ToggleTheme = () => {
    const [isDark, setIsDark] = useState(false);


    return (
        <div style={{ backgroundColor: isDark ? '#333' : '#fff', color: isDark ? '#fff' : '#000', padding: '20px', borderRadius: '5px' }}>
            <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
            <button onClick={() => setIsDark(!isDark)} style={{ padding: '10px', borderRadius: '5px', backgroundColor: isDark ? '#555' : '#ccc', color: isDark ? '#fff' : '#000' }}>
                Toggle Theme
            </button>
            <p>This is a simple theme toggle example.</p>
        </div>
    );
}
export default ToggleTheme;