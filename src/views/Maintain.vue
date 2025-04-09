<template>
  <body class="maintenance-bg min-h-screen flex flex-col items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden">
        <!-- Header -->
        <div class="bg-primary-700 py-6 px-8 text-white text-center">
            <h1 class="text-2xl md:text-3xl font-bold">Trang Web Đang Bảo Trì</h1>
        </div>
        
        <!-- Content -->
        <div class="p-6 md:p-10">
            <div class="flex flex-col md:flex-row items-center mb-8">
                <div class="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-U8ILco6aWiC2RTnQyuFPUzw9FrXRm2.jpeg" alt="Sao Khuê Logo" class="h-24 md:h-32">
                </div>
                <div>
                    <h2 class="text-xl md:text-2xl font-bold text-primary-700 mb-4">Trung Tâm Giáo Dục Sao Khuê</h2>
                    <p class="text-gray-600 mb-4">Chúng tôi đang tiến hành nâng cấp và cải thiện trang web để mang đến trải nghiệm tốt hơn cho quý phụ huynh và học viên.</p>
                    <p class="text-gray-600">Trang web sẽ sớm trở lại hoạt động. Xin cảm ơn sự kiên nhẫn của quý vị!</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-primary-50 p-5 rounded-lg">
                    <h3 class="font-bold text-primary-700 mb-3 flex items-center">
                        <i class="fas fa-phone-alt mr-2"></i> Liên hệ trong thời gian bảo trì
                    </h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-center">
                            <i class="fas fa-phone-alt text-primary-500 mr-2"></i>
                            <span>Hotline: 0819988255</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-envelope text-primary-500 mr-2"></i>
                            <span>Email: ttdhsaokhue@gmail.com</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-facebook-f text-primary-500 mr-2"></i>
                            <span>Facebook: Trung tâm Giáo dục Sao Khuê</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-secondary-50 p-5 rounded-lg">
                    <h3 class="font-bold text-secondary-700 mb-3 flex items-center">
                        <i class="fas fa-info-circle mr-2"></i> Thông tin quan trọng
                    </h3>
                    <p class="text-gray-700 mb-3">Trong thời gian bảo trì, các hoạt động giảng dạy vẫn diễn ra bình thường theo lịch học đã thông báo.</p>
                    <p class="text-gray-700">Quý phụ huynh và học viên có thể liên hệ trực tiếp với giáo viên hoặc văn phòng trung tâm để được hỗ trợ.</p>
                </div>
            </div>
            
            <div class="text-center">
                <div class="inline-block animate-bounce-slow mb-4">
                    <i class="fas fa-tools text-4xl text-primary-600"></i>
                </div>
                <p class="text-gray-500 italic">"Tâm huyết mở đường - Chất lượng dẫn lối"</p>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="bg-gray-100 py-4 px-6 text-center">
            <div class="flex justify-center space-x-4 mb-2">
                <a href="#" class="text-gray-500 hover:text-primary-700"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="text-gray-500 hover:text-primary-700"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-gray-500 hover:text-primary-700"><i class="fab fa-youtube"></i></a>
                <a href="#" class="text-gray-500 hover:text-primary-700"><i class="fab fa-tiktok"></i></a>
            </div>
            <p class="text-gray-600 text-sm">&copy; 2023 Trung Tâm Giáo Dục Sao Khuê. Tất cả các quyền được bảo lưu.</p>
        </div>
    </div>
</body>
</template>