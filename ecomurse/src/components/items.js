// first way.it will static
// export default function Items(){
//     return(
//         <div className="items">
//             <img src="/images/image1.jpeg"/>
//             <div className="item_detail">
//                 <div className="pricing">
//                     <span className="discount-price">20000</span>
//                     <small className="regular-price"><strike>25000</strike></small>
//                 </div>
//                 <div className="title">
//                     <h3>1+ Nord CE</h3>
//                 </div>
//             </div>
//             <button className="add-to-cart">
//                 <span>Add to cart</span>
//                 <img src="/icons/add-to-cart.jpeg"/>
//             </button>
//         </div>
//     )
// }

// // 2 way by making variable.but at this time it is also static.
// export default function Items(){
//     const data={
//         price:25000,
//         discountedPrice:20000,
//         title:"1+ Nord CE"
//     }
//     return(
//         <div className="items">
//             <img src={`images/${data.thumbnail}`}/>           {/*if in a string we want string and variable both then we write it inside backtick */}
//             <div className="item_detail">
//                 <div className="pricing">
//                     <span>{data.price}</span>
//                     <small><strike>{data.discountedPrice}</strike></small>
//                 </div>
//                 <div className="title">
//                     <h3>{data.title}</h3>
//                 </div>
//             </div>
//             <button className="add-to-cart">
//                 <span>Add to cart</span>
//                 <img src="/icons/add-to-cart.jpeg"/>
//             </button>
//         </div>
//     )
// }

// 3 way by by using props variable.that is we will pass argument from where we are calling this component
export default function Items(props){       //and on component automatically one variabe will come
    function buttonClick(){
        console.log('csd')
    }
    return(
        <div className="items">
            <img className="image" src={`images/${props.data.thumbnail}`}/>     {/*we will write as variable.variable.argument */}  
            <div className="item_detail">
                <div className="pricing">
                    <span>{props.data.discountedprice}</span>
                    <small><strike>{props.data.Price}</strike></small>
                </div>
                <div className="title">
                    <h3>{props.data.title}</h3>
                </div>
            </div>
            <button className="add-to-cart" onClick={buttonClick}>      {/*in react onClick me c capital hota h jabki js me c small */}
                <span>Add to cart</span>
                <img src="/icons/add-to-cart.jpeg"/>
            </button>
        </div>
    )
}