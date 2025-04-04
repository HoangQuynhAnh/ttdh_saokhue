<template>
  <div class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-primary-700 mb-2">Cảm Nhận Của Học Viên</h2>
            <p class="text-xl text-secondary-400 font-semibold">Những chia sẻ từ học viên của chúng tôi</p>
            <div class="w-24 h-1 bg-secondary-400 mx-auto mt-4"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Testimonial 1 -->
            <div class="bg-white rounded-lg shadow-lg p-6 relative transition-all duration-300 hover:-translate-y-2">
                <div class="absolute top-6 right-6 text-secondary-400 opacity-10">
                    <i class="fas fa-quote-right text-5xl"></i>
                </div>
                <div class="flex items-center mb-4">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Nguyễn Thị Hương" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-primary-700">Nguyễn Thị Hương</h3>
                        <p class="text-secondary-400">Học viên lớp 12</p>
                        <div class="flex text-secondary-400 mt-1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">"Tôi đã học tại trung tâm Sao Khuê được 6 tháng và đã đạt được kết quả ngoài mong đợi. Giáo viên rất tận tâm, phương pháp giảng dạy dễ hiểu và hiệu quả. Môi trường học tập thân thiện và chuyên nghiệp."</p>
            </div>
            
            <!-- Testimonial 2 -->
            <div class="bg-white rounded-lg shadow-lg p-6 relative transition-all duration-300 hover:-translate-y-2">
                <div class="absolute top-6 right-6 text-secondary-400 opacity-10">
                    <i class="fas fa-quote-right text-5xl"></i>
                </div>
                <div class="flex items-center mb-4">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Trần Minh Đức" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-primary-700">Trần Minh Đức</h3>
                        <p class="text-secondary-400">Học viên lớp 9</p>
                        <div class="flex text-secondary-400 mt-1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">"Nhờ khóa học Toán nâng cao tại trung tâm, tôi đã đạt giải Nhì trong kỳ thi học sinh giỏi cấp tỉnh. Cô Minh đã giúp tôi hiểu sâu về các khái niệm toán học và phương pháp giải nhanh. Rất biết ơn trung tâm!"</p>
            </div>
            
            <!-- Testimonial 3 -->
            <div class="bg-white rounded-lg shadow-lg p-6 relative transition-all duration-300 hover:-translate-y-2">
                <div class="absolute top-6 right-6 text-secondary-400 opacity-10">
                    <i class="fas fa-quote-right text-5xl"></i>
                </div>
                <div class="flex items-center mb-4">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Lê Thị Mai Anh" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-primary-700">Lê Thị Mai Anh</h3>
                        <p class="text-secondary-400">Phụ huynh học sinh</p>
                        <div class="flex text-secondary-400 mt-1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">"Con tôi đã tham gia khóa luyện thi đại học tại trung tâm và đã đạt được kết quả ngoài mong đợi. Các thầy cô rất nhiệt tình, tài liệu học tập phong phú và cập nhật. Đặc biệt, phương pháp ôn thi hiệu quả đã giúp con tôi tự tin hơn rất nhiều."</p>
            </div>
        </div>
        
        <div class="text-center mt-10">
            <a href="testimonials.html" class="inline-block bg-secondary-400 hover:bg-secondary-500 text-white font-bold py-3 px-8 rounded-lg transition duration-300">Xem thêm cảm nhận</a>
        </div>
    </div>
</div>
</template>