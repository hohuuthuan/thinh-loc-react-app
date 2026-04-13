import type { Service, Project, Testimonial, BlogPost, WorkflowStep, Stat } from '../types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Xây Dựng Dân Dụng',
    description: 'Dịch vụ xây dựng nhà ở cao cấp với sự tỉ mỉ trong từng chi tiết và tay nghề chất lượng cao, mang lại giá trị bền vững.',
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Xây Dựng Thương Mại',
    description: 'Các dự án thương mại quy mô lớn được bàn giao đúng hạn và trong ngân sách với chuyên môn kỹ thuật chuyên nghiệp.',
    icon: '🏢',
  },
  {
    id: 3,
    title: 'Dự Án Công Nghiệp',
    description: 'Xây dựng công nghiệp chuyên dụng cho các cơ sở sản xuất và phát triển cơ sở hạ tầng hiện đại.',
    icon: '🏭',
  },
  {
    id: 4,
    title: 'Thiết Kế Kiến Trúc',
    description: 'Kiến trúc sáng tạo, cân bằng giữa thẩm mỹ, công năng và tính bền vững cho mọi công trình.',
    icon: '📐',
  },
  {
    id: 5,
    title: 'Dịch Vụ Cải Tạo',
    description: 'Dịch vụ cải tạo chuyên nghiệp giúp hiện đại hóa và nâng cấp các cấu trúc hiện có một cách hoàn mỹ.',
    icon: '🔧',
  },
  {
    id: 6,
    title: 'Quản Lý Dự Án',
    description: 'Quản lý dự án chuyên gia đảm bảo tiến độ bàn giao và các tiêu chuẩn chất lượng vượt trội.',
    icon: '📊',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Phức Hợp Văn Phòng Hiện Đại',
    location: 'Trung Tâm Thành Phố',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    category: 'commercial',
    description: 'Một tổ hợp văn phòng hiện đại với các tính năng thiết kế bền vững và tiết kiệm năng lượng.',
  },
  {
    id: 2,
    title: 'Biệt Thự Cao Cấp',
    location: 'Khu Vực Ven Biển',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    category: 'residential',
    description: 'Nhà ở ven biển sang trọng với hoàn thiện cao cấp và kiến trúc hiện đại bậc nhất.',
  },
  {
    id: 3,
    title: 'Nhà Kho Công Nghiệp',
    location: 'Khu Phố Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    category: 'industrial',
    description: 'Cơ sở nhà kho hiện đại với hạ tầng logistics tiên tiến, tối ưu hóa không gian lưu trữ.',
  },
  {
    id: 4,
    title: 'Trung Tâm Thương Mại',
    location: 'Khu Đô Thị Mới',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&h=600&fit=crop',
    category: 'commercial',
    description: 'Trung tâm mua sắm đa tầng với các cơ sở bán lẻ hiện đại và không gian giải trí.',
  },
  {
    id: 5,
    title: 'Khu Dân Cư Sinh Thái',
    location: 'Vùng Ngoại Ô Xanh',
    image: 'https://images.unsplash.com/photo-1628592102751-ba83b03bc427?w=800&h=600&fit=crop',
    category: 'residential',
    description: 'Phát triển cộng đồng nhà ở với công viên, tiện ích xanh và môi trường sống trong lành.',
  },
  {
    id: 6,
    title: 'Nhà Máy Sản Xuất Công Nghệ Cao',
    location: 'Khu Công Nghiệp',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    category: 'industrial',
    description: 'Cơ sở sản xuất công nghệ cao với các hệ thống tiên tiến đạt tiêu chuẩn quốc tế.',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    title: 'Tư Vấn Thiết Kế',
    description: 'Cuộc họp ban đầu để hiểu rõ tầm nhìn và yêu cầu cụ thể cho dự án của bạn.',
    icon: '💬',
  },
  {
    id: 2,
    title: 'Lập Kế Hoạch',
    description: 'Lập kế hoạch chi tiết và phát triển thiết kế tối ưu cho công trình tương lai.',
    icon: '📋',
  },
  {
    id: 3,
    title: 'Ký Kết Hợp Đồng',
    description: 'Thỏa thuận chính thức với các điều khoản minh bạch và báo giá chi tiết, rõ ràng.',
    icon: '📝',
  },
  {
    id: 4,
    title: 'Thi Công Xây Dựng',
    description: 'Thực hiện chuyên nghiệp với các cập nhật thường xuyên và kiểm tra chất lượng nghiêm ngặt.',
    icon: '👷',
  },
  {
    id: 5,
    title: 'Bàn Giao Công Trình',
    description: 'Hoàn tất dự án và bàn giao công trình với đầy đủ hỗ trợ và bảo hành.',
    icon: '✅',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'Làm việc chuyên nghiệp! Đội ngũ đã vượt quá mong đợi của chúng tôi và bàn giao một không gian đẹp, đầy đủ công năng đúng hạn.',
    author: 'Nguyễn Văn Nam',
    role: 'Nhà Phát Triển Bất Động Sản',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    quote: 'Uy tín, tin cậy và sự tỉ mỉ đến từng chi tiết. Chúng tôi chắc chắn sẽ hợp tác lại trong các dự án tương lai.',
    author: 'Trần Thị Mai',
    role: 'Giám Đốc Doanh Nghiệp',
    avatar: '👩‍💼',
  },
  {
    id: 3,
    quote: 'Đội ngũ đã biến tầm nhìn của chúng tôi thành hiện thực với tay nghề xuất sắc và các giải pháp sáng tạo. Rất đáng tin cậy!',
    author: 'Lê Hoàng Anh',
    role: 'Chủ Sở Hữu Nhà Ở',
    avatar: '👨',
  },
  {
    id: 4,
    quote: 'Quản lý dự án chuyên gia và công nhân lành nghề. Họ đã xử lý dự án công nghiệp phức tạp của chúng tôi một cách hoàn hảo.',
    author: 'Phạm Minh Đức',
    role: 'Chủ Nhà Máy',
    avatar: '👨‍🔧',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Xu Hướng Xây Dựng Bền Vững Trong Kiến Trúc Hiện Đại',
    excerpt: 'Khám phá các kỹ thuật xây dựng thân thiện với môi trường giúp giảm thiểu tác động tiêu cực.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    date: '2024-04-10',
    category: 'Bền Vững',
  },
  {
    id: 2,
    title: 'Tương Lai Của Các Tòa Nhà Thông Minh',
    excerpt: 'Tìm hiểu cách IoT và AI đang thay đổi ngành xây dựng thương mại và quản lý tòa nhà.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    date: '2024-04-08',
    category: 'Công Nghệ',
  },
  {
    id: 3,
    title: 'Tiêu Chuẩn An Toàn Trong Thi Công Xây Dựng',
    excerpt: 'Tìm hiểu về các giao thức an toàn mới nhất đảm bảo bảo vệ tối đa cho công nhân.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    date: '2024-04-05',
    category: 'An Toàn',
  },
];

export const STATS: Stat[] = [
  { label: 'Năm Kinh Nghiệm', value: 25, suffix: '+' },
  { label: 'Dự Án Hoàn Thành', value: 150, suffix: '+' },
  { label: 'Thành Viên Đội Ngũ', value: 85, suffix: '+' },
  { label: 'Khách Hàng Hài Lòng', value: 98, suffix: '%' },
];

export const PARTNERS = [
  { name: 'BuildTech', logo: '🏗️' },
  { name: 'SafeConstruct', logo: '🛡️' },
  { name: 'GreenBuild', logo: '🌱' },
  { name: 'ProDesign', logo: '🎨' },
  { name: 'SmartSystems', logo: '📱' },
  { name: 'Quality Certified', logo: '✨' },
];
