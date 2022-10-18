import Items from "./items"
// 1 way
// export default function Product(){
//     return(
//         <div>
//             <div className='multiple-items'>
//                 <Items data={{                //if we use only one curly bracket then it will give error.but if we use one more  
//                     thumbnail:"image1.jpeg",    // curly bracket then it will consider it as a prop
//                     price:25000,                // At the time of calling the component which arguments we pass then react 
//                     discountedPrice:20000,      // automatically set these arguments in one variable this variable is called props
//                     title:"one plus Nord CE"
//                 }}/>
//                 <Items data={{
//                     thumbnail:"image2.jpeg",
//                     price:120000,
//                     discountedPrice:100000,
//                     title:"Apple iphone 13 pro"
//                 }}/>
//                 <Items data={{
//                     thumbnail:"image3.jpeg",
//                     price:100000,
//                     discountedPrice:80000,
//                     title:"Apple iphone 12 pro"
//                 }}/>
//                 <Items data={{
//                     thumbnail:"image4.jpg",
//                     price:70000,
//                     discountedPrice:50000,
//                     title:"one plus 10 pro"
//                 }}/>
//                 <Items data={{
//                     thumbnail:"image4.jpg",
//                     price:70000,
//                     discountedPrice:50000,
//                     title:"one plus 10 pro"
//                 }}/>
//         </div>  
//     </div>
//     )
// };

//2 way
export default function Product(){
    const items=[
        {
            thumbnail:"image1.jpeg",      
            discountedprice:20000,    
            Price:25000,                 
            title:"one plus Nord CE",
        },
        {
            thumbnail:"image2.jpeg",
            discountedprice:100000,
            Price:120000,
            title:"Apple iphone 13 pro",
        },
        {
            thumbnail:"image3.jpeg",
            discountedprice:80000,
            Price:100000,
            title:"Apple iphone 12 pro",
        },
        {
            thumbnail:"image4.jpg",
            discountedprice:50000,
            Price:70000,
            title:"one plus 10 pro",
        },
        {
            thumbnail:"image5.jpeg",
            discountedprice:34000,
            Price:40000,
            title:"one plus nord 2T"
        },
        {
            thumbnail:"image6.jpeg",
            discountedprice:103000,
            Price:150000,
            title:"samsung galaxy s22 ultra" 
        }
    ]
    return(
        <div>
            <div className='multiple-items'>
                    <Items data={items[0]}/>
                    <Items data={items[1]}/>
                    <Items data={items[2]}/>
                    <Items data={items[3]}/>
                    <Items data={items[4]}/> 
                    <Items data={items[5]}/>                
        </div>  
    </div>
    )
};
