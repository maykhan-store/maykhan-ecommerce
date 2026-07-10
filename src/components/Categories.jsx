function Categories(){

const categories=[
"Toys",
"Mobile Accessories",
"Home Products",
"Gift Items"
]


return(

<section>

<h2>
Shop Categories
</h2>

<div className="categories">

{
categories.map((item,index)=>(

<div className="category" key={index}>
{item}
</div>

))
}

</div>

</section>

)

}

export default Categories;