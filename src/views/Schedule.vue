<template>
  <div>
    <!-- Page Header -->
<div class="bg-primary-700 text-white py-12">
    <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-center">Lịch Học</h1>
        <p class="text-lg max-w-3xl mx-auto text-center">Xem lịch học chi tiết của các khóa học và sắp xếp thời gian học tập hiệu quả.</p>
    </div>
</div>

<!-- Schedule Content -->
<div class="py-12 bg-white">
    <div class="container mx-auto px-4">
        <!-- Schedule Filter -->
        <div class="bg-gray-100 p-6 rounded-lg mb-10 shadow-md">
            <h3 class="text-xl font-bold text-primary-700 mb-4">Tìm kiếm lịch học</h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label for="class" class="block text-gray-700 font-medium mb-2">Lớp học</label>
                    <select id="class" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700">
                        <option value="">Tất cả lớp học</option>
                        <option value="5">Lớp 5 ôn thi vào lớp 6</option>
                        <option value="9">Lớp 9 ôn thi vào lớp 10</option>
                        <option value="12">Lớp 12 ôn thi đại học</option>
                    </select>
                </div>
                <div>
                    <label for="subject" class="block text-gray-700 font-medium mb-2">Môn học</label>
                    <select id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700">
                        <option value="">Tất cả môn học</option>
                        <option value="math">Toán</option>
                        <option value="english">Tiếng Anh</option>
                        <option value="literature">Tiếng Việt/Ngữ Văn</option>
                        <option value="physics">Vật lý</option>
                        <option value="chemistry">Hóa học</option>
                    </select>
                </div>
                <div>
                    <label for="teacher" class="block text-gray-700 font-medium mb-2">Giáo viên</label>
                    <select id="teacher" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700">
                        <option value="">Tất cả giáo viên</option>
                        <option value="hop">Cô Hợp</option>
                        <option value="trang">Cô Trang</option>
                        <option value="thu-ha">Cô Thu Hà</option>
                    </select>
                </div>
                <div class="flex items-end">
                    <button class="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                        <i class="fas fa-search mr-2"></i> Tìm kiếm
                    </button>
                </div>
            </div>
        </div>

        <!-- Schedule Header -->
        <div class="mb-8">
            <div class="bg-primary-700 text-white p-4 rounded-t-lg">
                <h2 class="text-2xl font-bold text-center">THỜI KHÓA BIỂU</h2>
                <h3 class="text-xl font-semibold text-center mt-2">LỊCH HỌC LỚP 5 ÔN THI VÀO LỚP 6 (1)</h3>
                <p class="text-center mt-2">Khai giảng ngày: 09/07/2024</p>
            </div>
        </div>

        <!-- Schedule Table -->
        <div class="overflow-x-auto mb-10">
            <table class="w-full schedule-table border-collapse">
                <thead>
                    <tr>
                        <th class="w-1/6">THỨ</th>
                        <th class="w-1/4">MÔN HỌC</th>
                        <th class="w-1/4">THỜI GIAN HỌC</th>
                        <th class="w-1/3">GIÁO VIÊN DẠY</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Monday -->
                    <tr>
                        <td class="text-center font-bold bg-gray-100">BA</td>
                        <td>
                            <div class="flex items-center">
                                <div class="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                <span class="font-medium">TOÁN</span>
                            </div>
                        </td>
                        <td class="text-center">18h00 - 20h00</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Cô Hợp" class="w-8 h-8 rounded-full mr-2">
                                <span>Cô Hợp – NTT</span>
                            </div>
                        </td>
                    </tr>

                    <!-- Wednesday -->
                    <tr>
                        <td class="text-center font-bold bg-gray-100" rowspan="2">BẢY</td>
                        <td>
                            <div class="flex items-center">
                                <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                <span class="font-medium">TIẾNG ANH</span>
                            </div>
                        </td>
                        <td class="text-center">7h30 - 9h30</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Cô Trang" class="w-8 h-8 rounded-full mr-2">
                                <span>Cô Trang – CNN</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="flex items-center">
                                <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                <span class="font-medium">TIẾNG VIỆT</span>
                            </div>
                        </td>
                        <td class="text-center">9h45 - 11h45</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Cô Thu Hà" class="w-8 h-8 rounded-full mr-2">
                                <span>Cô Thu Hà – NTT</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Other Schedules -->
        <div class="mb-10">
            <h3 class="text-xl font-bold text-primary-700 mb-4">Các lớp học khác</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Schedule Card 1 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden schedule-card">
                    <div class="bg-primary-700 text-white p-4">
                        <h4 class="font-bold text-lg">Lớp 9 ôn thi vào lớp 10</h4>
                    </div>
                    <div class="p-4">
                        <div class="mb-3">
                            <p class="text-gray-600 text-sm">Khai giảng: 15/07/2024</p>
                            <p class="text-gray-600 text-sm">Số buổi: 24 buổi/môn</p>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span class="font-medium">Toán</span>
                                </div>
                                <span class="text-sm">Thứ 2, 4, 6</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                    <span class="font-medium">Tiếng Anh</span>
                                </div>
                                <span class="text-sm">Thứ 3, 5, 7</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                    <span class="font-medium">Ngữ Văn</span>
                                </div>
                                <span class="text-sm">Thứ 7, CN</span>
                            </div>
                        </div>
                        <div class="mt-4">
                            <a href="#" class="text-primary-700 hover:text-primary-800 font-medium flex items-center">
                                Xem lịch chi tiết <i class="fas fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Schedule Card 2 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden schedule-card">
                    <div class="bg-primary-700 text-white p-4">
                        <h4 class="font-bold text-lg">Lớp 12 ôn thi đại học</h4>
                    </div>
                    <div class="p-4">
                        <div class="mb-3">
                            <p class="text-gray-600 text-sm">Khai giảng: 10/07/2024</p>
                            <p class="text-gray-600 text-sm">Số buổi: 30 buổi/môn</p>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                                    <span class="font-medium">Toán</span>
                                </div>
                                <span class="text-sm">Thứ 2, 4, 6</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <span class="font-medium">Vật lý</span>
                                </div>
                                <span class="text-sm">Thứ 3, 5</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                    <span class="font-medium">Hóa học</span>
                                </div>
                                <span class="text-sm">Thứ 7, CN</span>
                            </div>
                        </div>
                        <div class="mt-4">
                            <a href="#" class="text-primary-700 hover:text-primary-800 font-medium flex items-center">
                                Xem lịch chi tiết <i class="fas fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Schedule Card 3 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden schedule-card">
                    <div class="bg-primary-700 text-white p-4">
                        <h4 class="font-bold text-lg">Tiếng Anh giao tiếp</h4>
                    </div>
                    <div class="p-4">
                        <div class="mb-3">
                            <p class="text-gray-600 text-sm">Khai giảng: 20/07/2024</p>
                            <p class="text-gray-600 text-sm">Số buổi: 20 buổi</p>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                    <span class="font-medium">Cơ bản</span>
                                </div>
                                <span class="text-sm">Thứ 2, 4</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
                                    <span class="font-medium">Trung cấp</span>
                                </div>
                                <span class="text-sm">Thứ 3, 5</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 rounded-full bg-green-700 mr-2"></div>
                                    <span class="font-medium">Nâng cao</span>
                                </div>
                                <span class="text-sm">Thứ 7, CN</span>
                            </div>
                        </div>
                        <div class="mt-4">
                            <a href="#" class="text-primary-700 hover:text-primary-800 font-medium flex items-center">
                                Xem lịch chi tiết <i class="fas fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Schedule Legend -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md mb-10">
            <h3 class="text-xl font-bold text-primary-700 mb-4">Chú thích</h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                    <span class="text-gray-700">Toán</span>
                </div>
                <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                    <span class="text-gray-700">Tiếng Anh</span>
                </div>
                <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                    <span class="text-gray-700">Tiếng Việt/Ngữ Văn</span>
                </div>
                <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                    <span class="text-gray-700">Vật lý</span>
                </div>
                <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                    <span class="text-gray-700">Hóa học</span>
                </div>
            </div>
        </div>

        <!-- Schedule Notes -->
        <div class="bg-white p-6 rounded-lg shadow-md mb-10 border-l-4 border-secondary-400">
            <h3 class="text-xl font-bold text-primary-700 mb-4">Lưu ý</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                <li>Học viên vui lòng đến lớp trước giờ học 10 phút.</li>
                <li>Mang đầy đủ sách vở, dụng cụ học tập theo yêu cầu của giáo viên.</li>
                <li>Nghỉ học cần báo trước với giáo viên hoặc văn phòng trung tâm.</li>
                <li>Lịch học có thể thay đổi, trung tâm sẽ thông báo trước ít nhất 3 ngày.</li>
                <li>Mọi thắc mắc về lịch học vui lòng liên hệ hotline: (+84) 819988255.</li>
            </ul>
        </div>
    </div>
</div>
  </div>
</template>
