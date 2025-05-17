import { useEffect, useState } from "react";

export default function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((r) => r.json())
            .then(setProducts)
            .catch((err) => console.error("API error:", err));
    }, []);

    return (
        <main className="p-8 font-sans text-gray-800">
            <h1 className="text-2xl font-bold mb-4">Products</h1>

            {products.length === 0 ? (
                <p>Loading…</p>
            ) : (
                <ul className="space-y-2">
                    {products.map((p) => (
                        <li
                            key={p.id}
                            className="border rounded-xl p-4 shadow-sm flex justify-between"
                        >
                            <span>{p.name}</span>
                            <span>${p.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
