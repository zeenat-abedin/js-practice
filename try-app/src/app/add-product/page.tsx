export default function AddProduct(){
    return (
        <div style={{margin: '4em'}}>
            <h1>Add product from here...</h1>
            <form className="max-w-3xl p-12 m-auto border border-gray-300">
            <div>
                <div>
                    <h1>Add Product</h1>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Product Name</label>
                        <div>
                            <input type="text" name="name"/>
                        </div>
                    </div>
                     <div>
                        <label htmlFor="">Price</label>
                        <div>
                            <input type="text" name="price"/>
                        </div>
                    </div>
                     <div>
                        <label htmlFor="">Product Image</label>
                        <div>
                            <input type="file" name="image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            </form>
        </div>
    )
}