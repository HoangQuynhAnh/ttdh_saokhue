<template>
  <div>
      <!-- Page Header -->
      <div class="bg-primary-700 text-white py-12">
        <div class="container mx-auto px-4">
            <h1 class="text-3xl md:text-4xl font-bold mb-4 text-center">Tin Tức & Sự Kiện</h1>
            <p class="text-lg max-w-3xl mx-auto text-center">Cập nhật những tin tức mới nhất về giáo dục, sự kiện và hoạt động của trung tâm.</p>
        </div>
    </div>

    <!-- News Content -->
    <div class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Main Content -->
                <div class="">
                    <!-- Featured News -->
                    <div class="mb-10">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Featured News" class="w-full h-80 object-cover">
                            <div class="p-6">
                                <div class="flex items-center mb-4">
                                    <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">Tin nổi bật</span>
                                    <span class="text-gray-500 text-sm ml-4">15/04/2023</span>
                                </div>
                                <h2 class="text-2xl font-bold text-gray-800 mb-4">Khai giảng khóa học mới: Luyện thi đại học 2023-2024</h2>
                                <p class="text-gray-600 mb-6">Trung tâm Trung tâm Sao Khuê chính thức khai giảng khóa học "Luyện thi đại học 2023-2024" với đội ngũ giáo viên giàu kinh nghiệm và phương pháp giảng dạy hiệu quả. Khóa học được thiết kế đặc biệt để giúp học sinh ôn tập toàn diện và đạt điểm cao trong kỳ thi sắp tới.</p>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author" class="w-10 h-10 rounded-full mr-3">
                                        <span class="text-gray-700">Nguyễn Văn Đức</span>
                                    </div>
                                    <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">Đọc tiếp <i class="fas fa-arrow-right ml-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News List -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- News Item 1 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="News" class="w-full h-48 object-cover">
                            <div class="p-5">
                                <div class="flex items-center mb-3">
                                    <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Sự kiện</span>
                                    <span class="text-gray-500 text-sm ml-3">10/04/2023</span>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-3">Hội thảo "Phương pháp học tập hiệu quả"</h3>
                                <p class="text-gray-600 mb-4">Trung tâm tổ chức hội thảo chia sẻ phương pháp học tập hiệu quả cho học sinh với sự tham gia của các chuyên gia giáo dục hàng đầu.</p>
                                <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">Đọc tiếp <i class="fas fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>
                        
                        <!-- News Item 2 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="News" class="w-full h-48 object-cover">
                            <div class="p-5">
                                <div class="flex items-center mb-3">
                                    <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Thành tích</span>
                                    <span class="text-gray-500 text-sm ml-3">05/04/2023</span>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-3">Học viên đạt giải Nhất kỳ thi HSG cấp tỉnh</h3>
                                <p class="text-gray-600 mb-4">Chúc mừng em Nguyễn Văn A, học viên khóa Toán học nâng cao đã xuất sắc đạt giải Nhất kỳ thi học sinh giỏi cấp tỉnh.</p>
                                <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">Đọc tiếp <i class="fas fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>
                        
                        <!-- News Item 3 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="News" class="w-full h-48 object-cover">
                            <div class="p-5">
                                <div class="flex items-center mb-3">
                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Khóa học</span>
                                    <span class="text-gray-500 text-sm ml-3">01/04/2023</span>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-3">Mở đăng ký khóa học Vật lý nâng cao</h3>
                                <p class="text-gray-600 mb-4">Trung tâm chính thức mở đăng ký khóa học Vật lý nâng cao dành cho học sinh lớp 11 và 12 với nhiều ưu đãi hấp dẫn.</p>
                                <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">Đọc tiếp <i class="fas fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>
                        
                        <!-- News Item 4 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <img src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="News" class="w-full h-48 object-cover">
                            <div class="p-5">
                                <div class="flex items-center mb-3">
                                    <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Giáo viên</span>
                                    <span class="text-gray-500 text-sm ml-3">28/03/2023</span>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-3">Chào đón giáo viên mới tham gia đội ngũ</h3>
                                <p class="text-gray-600 mb-4">Trung tâm vui mừng chào đón TS. Nguyễn Văn Đức, chuyên gia về Toán học ứng dụng tham gia đội ngũ giảng viên.</p>
                                <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">Đọc tiếp <i class="fas fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Pagination -->
                    <div class="flex justify-center mt-10">
                        <nav class="inline-flex rounded-md shadow">
                            <a href="#" class="py-2 px-4 bg-white border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-50">
                                <i class="fas fa-chevron-left"></i>
                            </a>
                            <a href="#" class="py-2 px-4 bg-primary-700 border border-primary-600 text-white">1</a>
                            <a href="#" class="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">2</a>
                            <a href="#" class="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">3</a>
                            <a href="#" class="py-2 px-4 bg-white border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-50">
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>