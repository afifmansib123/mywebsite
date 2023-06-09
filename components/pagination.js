const Pagination = () => {
    return (
        <div style={{
            display : "flex",
            justifyContent : "right",
            margin : "20px",
            height : "80vh",
            width : "50%"
        }}>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Pagination