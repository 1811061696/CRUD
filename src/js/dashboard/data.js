// data navbar
const menuItems = [
    {
      id: "product",
      class: "fa-solid fa-database",
      title: "Danh sách sản phẩm",
      path: "/product"

    },
    {
      id: "user",
      class: "fa-solid fa-user",
      title: "Khách hàng",
      path: "/user"

    },
    {
      id: "order",
      class: "fa-solid fa-file-lines",
      title: "Đơn hàng",
      path: "/order"

    },
  ];



// data chart
const chartData = [880, 1020, 790, 900, 850, 1170, 1250];
const chartLabels = [
    "01 June",
    "02 June",
    "03 June",
    "04 June",
    "05 June",
    "06 June",
    "07 June",
  ];


  // data user
const newUser = [
    {
        img: "https://cdnimg.vietnamplus.vn/uploaded/bokttj/2022_03_10/aldrin_apollo.jpg",
        userName: "Nguyễn Quang Thành",
        email: "nguyenquangthanh0412@gmail.com",
    },
    {
        img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg",
        userName: "Nguyễn Văn A",
        email: "nguyenquangthanh0412@gmail.com",
    },
    {
        img: "https://st.quantrimang.com/photos/image/2021/01/18/anh-hoan-hao-1.jpg",
        userName: "Nguyễn Quang B",
        email: "nguyenquangthanh0412@gmail.com",
    },
    {
        img: "https://cdnimg.vietnamplus.vn/uploaded/bokttj/2022_03_10/aldrin_apollo.jpg",
        userName: "Nguyễn Quang Thành",
        email: "nguyenquangthanh0412@gmail.com",
    },
    {
        img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg",
        userName: "Nguyễn Văn A",
        email: "nguyenquangthanh0412@gmail.com",
    },
    {
        img: "https://st.quantrimang.com/photos/image/2021/01/18/anh-hoan-hao-1.jpg",
        userName: "Nguyễn Quang B",
        email: "nguyenquangthanh0412@gmail.com",
    },
    {
        img: "https://cdnimg.vietnamplus.vn/uploaded/bokttj/2022_03_10/aldrin_apollo.jpg",
        userName: "Nguyễn Quang Thành",
        email: "nguyenquangthanh0412@gmail.com",
    },
    {
        img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg",
        userName: "Nguyễn Văn A",
        email: "nguyenquangthanh0412@gmail.com",
    },
    {
        img: "https://st.quantrimang.com/photos/image/2021/01/18/anh-hoan-hao-1.jpg",
        userName: "Nguyễn Quang B",
        email: "nguyenquangthanh0412@gmail.com",
    },
]


// data product
const productSelling = [
    {
        productName: "Bàn chơi game",
        productId: "Mã SP: 00001",
        sales: 0,
    },
    {
        productName: "Ghế chơi game",
        productId: "Mã SP: 00002",
        sales: 10,
    },
    {
        productName: "Tay cầm chơi game",
        productId: "Mã SP: 00003",
        sales: 20,
    },
    {
        productName: "Bàn phím cơ",
        productId: "Mã SP: 00004",
        sales: 30,
    },
    {
        productName: "Ghế công cơ học",
        productId: "Mã SP: 00005",
        sales: 40,
    },
    {
        productName: "Chuột không dây",
        productId: "Mã SP: 00006",
        sales: 50,
    },
    {
        productName: "Tai nghe không dây",
        productId: "Mã SP: 00007",
        sales: 60,
    },
    {
        productName: "Lót chuột",
        productId: "Mã SP: 00008",
        sales: 70,
    },
    {
        productName: "Giá đỡ pc",
        productId: "Mã SP: 00009",
        sales: 80,
    },
    {
        productName: "SSD",
        productId: "Mã SP: 00010",
        sales: 90,
    },
]


// data table
const dataTable = [
    {
        name: "Nguyễn Quang Thành",
        date: "Jun 23, 2022",
        price: "2.000.000 VNĐ",
        status: "Hoàn thành",
        Class: "label-success",
    },
    {
        name: "Nguyễn Quang A",
        date: "Jun 23, 2022",
        price: "2.100.000 VNĐ",
        status: "Đang giao",
        Class: "label-primary",
        background: "background__table"
    },
    {
        name: "Nguyễn Quang B",
        date: "Jun 23, 2022",
        price: "2.200.000 VNĐ",
        status: "Đã hủy",
        Class: "label-danger",
    },
    {
        name: "Nguyễn Quang C",
        date: "Jun 23, 2022",
        price: "2.300.000 VNĐ",
        status: "Hoàn thành",
        Class: "label-success",
        background: "background__table"
    },
    {
        name: "Nguyễn Quang D",
        date: "Jun 23, 2022",
        price: "2.500.000 VNĐ",
        status: "Đã hủy",
        Class: "label-danger",
    },
    {
        name: "Nguyễn Quang E",
        date: "Jun 23, 2022",
        price: "2.400.000 VNĐ",
        status: "Đang giao",
        Class: "label-primary",
        background: "background__table"
    },
    {
        name: "Nguyễn Quang F",
        date: "Jun 23, 2022",
        price: "2.600.000 VNĐ",
        status: "Hoàn thành",
        Class: "label-success",
    },
    {
        name: "Nguyễn Quang G",
        date: "Jun 23, 2022",
        price: "2.700.000 VNĐ",
        status: "Đang giao",
        Class: "label-primary",
        background: "background__table"
    },
    {
        name: "Nguyễn Quang H",
        date: "Jun 23, 2022",
        price: "2.800.000 VNĐ",
        status: "Đã hủy",
        Class: "label-danger",
    },
] 


// product
const PRODUCT = [
    {
        name: "Chuột máy tính",
        type: "Chuột",
        create_date: "jun 23, 2022",
        amount: "100 cái",
        price: '2.300.000',
        status: "còn hàng",
        Class: "label-success",
    },
    {
        name: "Bàn làm việc",
        type: "Bàn",
        create_date: "jun 23, 2022",
        amount: "100 cái",
        price: '6.700.000',
        status: "còn hàng",
        Class: "label-success",
        background: "background__table"
    },
    {
        name: "Ghế công thái học",
        type: "Ghế",
        create_date: "jun 18, 2022",
        amount: "0 cái",
        price: '5.000.000',
        status: "hết hàng",
        Class: "label-danger",
    },
    {
        name: "Chuột gameing",
        type: "Chuột",
        create_date: "jun 15, 2022",
        amount: "0 cái",
        price: '2.300.000',
        status: "hết hàng",
        Class: "label-danger",
        background: "background__table"
    },
    {
        name: "Tai nghe không dây",
        type: "Tai nghe",
        create_date: "jun 11, 2022",
        amount: "100 cái",
        price: '2.800.000',
        status: "Còn hàng",
        Class: "label-success",
    },
    {
        name: "Bàn phím cơ",
        type: "Bàn phím",
        create_date: "jun 11, 2022",
        amount: "100 cái",
        price: '2.300.000',
        status: "Còn hàng",
        Class: "label-success",
        background: "background__table"
    },
    {
        name: "Bàn phím văn phòng",
        type: "Bàn phím",
        create_date: "jun 11, 2022",
        amount: "100 cái",
        price: '2.300.000',
        status: "Còn hàng",
        Class: "label-success",
    },
    {
        name: "Lót chuột",
        type: "Lót chuột",
        create_date: "jun 11, 2022",
        amount: "80 cái",
        price: '2.300.000',
        status: "Còn hàng",
        Class: "label-success",
        background: "background__table"
    },
    {
        name: "Giá đỡ laptop",
        type: "Phụ kiện laptop",
        create_date: "jun 11, 2022",
        amount: "40 cái",
        price: '2.300.000',
        status: "Còn hàng",
        Class: "label-success",
    },
]



  export{
    menuItems,
    chartData,
    chartLabels,
    newUser,
    productSelling,
    dataTable,
    PRODUCT
  }