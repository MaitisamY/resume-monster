/* eslint-disable react/prop-types */
export default function Links({ categories }) {
    return (
        <div className="link-box border-dull">
            <h3>Categories</h3>
            <ul>
                {categories.map((category) => 
                    <li key={category.id}>
                        <a 
                            className={`cursor-pointer text-white font-bold font-work-sans  
                                ${category.id % 2 === 0 ? 'hover-text-blue' : 'hover-text-purple'}`}
                        >
                            {category.title}
                        </a>
                    </li>
                )}
            </ul>    
        </div>    
    );
}