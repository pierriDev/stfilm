
const Filter = ({
    title,
    handleCategoryPress
}: any) => {
    return (
        <div className="product__box--filter--category">
            <a className='product__box--filter--category--btn' onClick={() => {handleCategoryPress(title)}}>{title}</a>  
        </div>
    )
}

export default Filter;