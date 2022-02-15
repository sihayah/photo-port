import React from 'react';

const categories = [
    {
        name: "commerical",
        description: "Photos of grocery stores, food trucks, and other commerical projects"
    },
    { name: "portraits", description: "Portraits of poeple in my life" },
    { name: "food", descripton: " Delicious delicacies"},
    {
        name: "landscape",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature"
    }
];

function categorySelected(name) {
    console.log(`${name} clicked`)
}

function Nav() {
    return (
        <header className="flex-row">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)}> 
                                {category.name}
                            </span>

                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;