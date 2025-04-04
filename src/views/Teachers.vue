<template>
  <div>
      <!-- Teacher Search and Filter -->
      <div class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="bg-gray-100 p-6 rounded-lg mb-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label for="search" class="block text-gray-700 font-medium mb-2">Tìm kiếm giáo viên</label>
                        <div class="relative">
                            <input type="text" id="search" placeholder="Nhập tên giáo viên..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                            <button class="absolute right-2 top-2 text-gray-500">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label for="subject" class="block text-gray-700 font-medium mb-2">Môn học</label>
                        <select id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                            <option value="">Tất cả môn học</option>
                            <option value="math">Toán học</option>
                            <option value="english">Tiếng Anh</option>
                            <option value="physics">Vật lý</option>
                            <option value="chemistry">Hóa học</option>
                            <option value="literature">Ngữ văn</option>
                        </select>
                    </div>
                    <div>
                        <label for="experience" class="block text-gray-700 font-medium mb-2">Kinh nghiệm</label>
                        <select id="experience" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                            <option value="">Tất cả</option>
                            <option value="1-5">1-5 năm</option>
                            <option value="5-10">5-10 năm</option>
                            <option value="10+">Trên 10 năm</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Teachers Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Teacher 1 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Teacher" class="w-full h-64 object-cover">
                        <div class="absolute top-0 right-0 bg-primary-700 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">10+ năm KN</div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-1">Nguyễn Thị Minh</h3>
                        <p class="text-primary-600 font-medium mb-3">Giáo viên Toán học</p>
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <span class="text-gray-600 ml-2">(4.5)</span>
                        </div>
                        <p class="text-gray-600 mb-4">Thạc sĩ Toán học, 10 năm kinh nghiệm giảng dạy tại các trường THPT chuyên. Chuyên gia luyện thi học sinh giỏi và đại học.</p>
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-3">
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fas fa-envelope"></i></a>
                            </div>
                            <a href="#" class="bg-primary-700 hover:bg-primary-700 text-white py-2 px-4 rounded-lg">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
                
                <!-- Teacher 2 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Teacher" class="w-full h-64 object-cover">
                        <div class="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">Tiến sĩ</div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-1">Trần Văn Hùng</h3>
                        <p class="text-primary-600 font-medium mb-3">Giáo viên Vật lý</p>
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-gray-600 ml-2">(5.0)</span>
                        </div>
                        <p class="text-gray-600 mb-4">Tiến sĩ Vật lý, giảng viên đại học và có nhiều năm kinh nghiệm luyện thi HSG. Tác giả của nhiều sách giáo khoa và tài liệu tham khảo.</p>
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-3">
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fas fa-envelope"></i></a>
                            </div>
                            <a href="#" class="bg-primary-700 hover:bg-primary-700 text-white py-2 px-4 rounded-lg">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
                
                <!-- Teacher 3 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Teacher" class="w-full h-64 object-cover">
                        <div class="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">IELTS 8.5</div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-1">Lê Thị Hương</h3>
                        <p class="text-primary-600 font-medium mb-3">Giáo viên Tiếng Anh</p>
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <span class="text-gray-600 ml-2">(4.7)</span>
                        </div>
                        <p class="text-gray-600 mb-4">Thạc sĩ ngôn ngữ Anh, chứng chỉ IELTS 8.5, 8 năm kinh nghiệm giảng dạy. Chuyên gia về phương pháp học tiếng Anh hiệu quả.</p>
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-3">
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fas fa-envelope"></i></a>
                            </div>
                            <a href="#" class="bg-primary-700 hover:bg-primary-700 text-white py-2 px-4 rounded-lg">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
                
                <!-- Teacher 4 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Teacher" class="w-full h-64 object-cover">
                        <div class="absolute top-0 right-0 bg-primary-700 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">12+ năm KN</div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-1">Phạm Minh Tuấn</h3>
                        <p class="text-primary-600 font-medium mb-3">Giáo viên Hóa học</p>
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-gray-600 ml-2">(4.9)</span>
                        </div>
                        <p class="text-gray-600 mb-4">Thạc sĩ Hóa học, 12 năm kinh nghiệm giảng dạy và biên soạn nhiều tài liệu. Chuyên gia về phương pháp giải nhanh bài tập hóa học.</p>
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-3">
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fas fa-envelope"></i></a>
                            </div>
                            <a href="#" class="bg-primary-700 hover:bg-primary-700 text-white py-2 px-4 rounded-lg">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
                
                <!-- Teacher 5 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative">
                        <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Teacher" class="w-full h-64 object-cover">
                        <div class="absolute top-0 right-0 bg-yellow-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">Giáo viên xuất sắc</div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-1">Trần Thị Hoa</h3>
                        <p class="text-primary-600 font-medium mb-3">Giáo viên Ngữ văn</p>
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-gray-600 ml-2">(4.8)</span>
                        </div>
                        <p class="text-gray-600 mb-4">Thạc sĩ Văn học Việt Nam, 15 năm kinh nghiệm giảng dạy. Chuyên gia phân tích tác phẩm văn học và kỹ năng làm văn.</p>
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-3">
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fas fa-envelope"></i></a>
                            </div>
                            <a href="#" class="bg-primary-700 hover:bg-primary-700 text-white py-2 px-4 rounded-lg">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
                
                <!-- Teacher 6 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Teacher" class="w-full h-64 object-cover">
                        <div class="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">Tiến sĩ</div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-1">Nguyễn Văn Đức</h3>
                        <p class="text-primary-600 font-medium mb-3">Giáo viên Toán học</p>
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <span class="text-gray-600 ml-2">(4.6)</span>
                        </div>
                        <p class="text-gray-600 mb-4">Tiến sĩ Toán học ứng dụng, 9 năm kinh nghiệm giảng dạy. Chuyên gia về phương pháp giải toán nhanh và hiệu quả.</p>
                        <div class="flex justify-between items-center">
                            <div class="flex space-x-3">
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="text-gray-600 hover:text-primary-600"><i class="fas fa-envelope"></i></a>
                            </div>
                            <a href="#" class="bg-primary-700 hover:bg-primary-700 text-white py-2 px-4 rounded-lg">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <!-- Join Our Team -->
    <div class="bg-primary-50 py-16">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-6">Tham gia đội ngũ giảng viên của chúng tôi</h2>
                <p class="text-gray-600 mb-8 text-lg">Bạn là một giáo viên tài năng và đam mê giảng dạy? Chúng tôi luôn tìm kiếm những người có khả năng truyền cảm hứng và kiến thức cho học viên.</p>
                <a href="contact.html" class="inline-block bg-primary-700 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg">Ứng tuyển ngay</a>
            </div>
        </div>
    </div>
  </div>
</template>