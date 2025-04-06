<template>
  <div>
      <!-- Teacher Search and Filter -->
      <div class="py-12 bg-white">
        <div class="container mx-auto px-4">
                    <!-- Page Header -->
          <div class="bg-primary-700 text-white py-12">
          <div class="container mx-auto px-4">
              <h1 class="text-3xl md:text-4xl font-bold mb-4 text-center">Thông Tin Giáo Viên</h1>
              <p class="text-lg max-w-3xl mx-auto text-center">Đội ngũ giáo viên nước ngoài chất lượng cao của Trung tâm Giáo dục Sao Khuế</p>
          </div>
          </div>
          <!--
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
            -->
            <!-- Teacher Information Section -->
          <div class="py-12 bg-white">
          <div class="container mx-auto px-4">
              <div class="mb-8">
                  <h2 class="text-2xl font-bold text-primary-700 mb-6">Danh Sách Giáo Viên Nước Ngoài</h2>

                  <!-- Teacher Cards Grid -->
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <!-- Teacher 1 -->
                      <div class="teacher-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                          <div class="relative overflow-hidden" style="height:30rem">
                              <img src="../assets/teacher1.jpg" alt="WAQAS ALI" class="w-full h-full object-cover teacher-image">
                              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                  <h3 class="text-xl font-bold text-white">WAQAS ALI</h3>
                                  <p class="text-secondary-300">Pakistan</p>
                              </div>
                          </div>
                          <div class="p-5">
                              <div class="flex justify-between mb-4">
                                  <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Nam</span>
                              </div>
                              <div class="mb-3">
                                  <p class="text-gray-600 font-medium">Ngày sinh:</p>
                                  <p class="text-gray-800">24/03/1992</p>
                              </div>
                              <div class="mb-4">
                                  <span class="bg-primary-100 text-primary-700 font-medium px-2.5 py-0.5 rounded-full">Bằng cấp chứng chỉ</span>
                                  <ul class="list-disc pl-5 text-gray-700 mt-1">
                                      <li>Bằng Đại học</li>
                                      <li>Chứng chỉ tiếng anh EF SET</li>
                                      <li>Chứng chỉ sư phạm Tesol</li>
                                  </ul>
                              </div>
                              <div class="flex items-center text-gray-500 mt-auto">
                                  <i class="fas fa-chalkboard-teacher mr-2"></i>
                                  <span>Giáo viên tiếng Anh</span>
                              </div>
                          </div>
                      </div>

                      <!-- Teacher 2 -->
                      <div class="teacher-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                          <div class="relative overflow-hidden" style="height:30rem">
                              <img src="../assets/teacher2.jpg" alt="ANTHONY MICHAEL JACKSON" class="w-full h-full object-cover teacher-image">
                              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                  <h3 class="text-xl font-bold text-white">ANTHONY MICHAEL JACKSON</h3>
                                  <p class="text-secondary-300">Mỹ</p>
                              </div>
                          </div>
                          <div class="p-5">
                              <div class="flex justify-between mb-4">
                                  <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Nam</span>
                              </div>
                              <div class="mb-3">
                                  <p class="text-gray-600 font-medium">Ngày sinh:</p>
                                  <p class="text-gray-800">01/03/1991</p>
                              </div>
                              <div class="mb-4">
                                  <span class="bg-primary-100 text-primary-700 font-medium px-2.5 py-0.5 rounded-full">Bằng cấp chứng chỉ</span>
                                  <ul class="list-disc pl-5 text-gray-700 mt-1">
                                      <li>Bằng Đại học</li>
                                      <li>Chứng chỉ tiếng anh EF SET</li>
                                      <li>Chứng chỉ sư phạm Tesol</li>
                                  </ul>
                              </div>
                              <div class="flex items-center text-gray-500 mt-auto">
                                  <i class="fas fa-chalkboard-teacher mr-2"></i>
                                  <span>Giáo viên tiếng Anh</span>
                              </div>
                          </div>
                      </div>

                      <!-- Teacher 3 -->
                      <div class="teacher-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                          <div class="relative overflow-hidden" style="height:30rem">
                              <img src="../assets/teacher3.jpg" alt="IQBAL MAIRA" class="w-full h-full object-cover teacher-image">
                              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                  <h3 class="text-xl font-bold text-white">IQBAL MAIRA</h3>
                                  <p class="text-secondary-300">Pakistan</p>
                              </div>
                          </div>
                          <div class="p-5">
                              <div class="flex justify-between mb-4">
                                  <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Nữ</span>
                              </div>
                              <div class="mb-3">
                                  <p class="text-gray-600 font-medium">Ngày sinh:</p>
                                  <p class="text-gray-800">15/12/1994</p>
                              </div>
                              <div class="mb-4">
                                  <span class="bg-primary-100 text-primary-700 font-medium px-2.5 py-0.5 rounded-full">Bằng cấp chứng chỉ</span>
                                  <ul class="list-disc pl-5 text-gray-700 mt-1">
                                      <li>Bằng Đại học</li>
                                      <li>Chứng chỉ tiếng anh EF SET</li>
                                      <li>Chứng chỉ sư phạm Tesol</li>
                                  </ul>
                              </div>
                              <div class="flex items-center text-gray-500 mt-auto">
                                  <i class="fas fa-chalkboard-teacher mr-2"></i>
                                  <span>Giáo viên tiếng Anh</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <!-- Teacher Qualifications -->
              <div class="mt-12">
                  <h2 class="text-2xl font-bold text-primary-700 mb-6">Chất Lượng Giảng Dạy</h2>
                  <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                      <p class="text-gray-700 mb-4">Tại Trung tâm Giáo dục Sao Khuế, chúng tôi tự hào về đội ngũ giáo viên nước ngoài chất lượng cao. Tất cả giáo viên của chúng tôi đều:</p>
                      <ul class="list-disc pl-8 space-y-2 text-gray-700 mb-4">
                          <li>Có bằng đại học từ các trường danh tiếng</li>
                          <li>Sở hữu chứng chỉ giảng dạy tiếng Anh quốc tế (TESOL/TEFL/CELTA)</li>
                          <li>Có kinh nghiệm giảng dạy với học sinh Việt Nam</li>
                          <li>Thường xuyên được đào tạo và cập nhật phương pháp giảng dạy hiện đại</li>
                          <li>Có khả năng giao tiếp tốt và thân thiện với học viên</li>
                      </ul>
                      <p class="text-gray-700">Chúng tôi cam kết mang đến cho học viên trải nghiệm học tập với 100% giáo viên nước ngoài chất lượng, giúp học viên phát triển kỹ năng tiếng Anh toàn diện và tự tin giao tiếp trong môi trường quốc tế.</p>
                  </div>
              </div>

          </div>
          </div>
      </div>
      </div>

  </div>
</template>
