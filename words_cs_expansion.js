/* ============================================================
   CS 背单词对战 · 扩充词库 words_cs_expansion.js  (9618 Computer Science)
   纯数据文件，零依赖、零副作用（只声明全局常量）。
   暴露到全局：CS_WORDS_EXPANSION

   来源：Cambridge 9618 官方大纲 (697372-2026-syllabus) + 官方教材
   (Cambridge International AS & A Level Computer Science / Watson & Williams;
    Langfield & Duddell)。仅新增 words_cs.js 中尚未收录的术语。
   字段与 words_cs.js 完全一致；topic 沿用现有 CS_TOPICS 命名。
   ============================================================ */

const CS_WORDS_EXPANSION = [
  /* ==========================================================
     ========================  AS 级  ========================
     ========================================================== */

  /* ---------- Data Representation (AS) ---------- */
  {term:"One's complement", cn:"反码", cn_def:"把二进制各位取反表示负数的有符号整数表示法", definition:"A method of representing signed integers in binary by inverting every bit of the positive value to represent its negative.", example:"In One's complement the negative of 0011 is 1100.", level:"AS", topic:"Data Representation"},
  {term:"Binary prefix", cn:"二进制前缀", cn_def:"以 2 的幂为基的容量前缀，如 kibi、mebi、gibi", definition:"A unit prefix based on powers of two, such as kibi (2^10) or mebi (2^20), used to measure memory capacity.", level:"AS", topic:"Data Representation"},
  {term:"Decimal prefix", cn:"十进制前缀", cn_def:"以 10 的幂为基的容量前缀，如 kilo、mega", definition:"A unit prefix based on powers of ten, such as kilo (10^3) or mega (10^6), often used for storage sizes.", level:"AS", topic:"Data Representation"},
  {term:"Kibibyte", cn:"二进制千字节", cn_def:"等于 1024 字节的容量单位（KiB）", definition:"A unit of memory equal to 1024 bytes, abbreviated KiB, using the binary prefix kibi.", level:"AS", topic:"Data Representation"},
  {term:"Extended ASCII", cn:"扩展 ASCII", cn_def:"用 8 位表示 256 个字符、扩充自 ASCII 的字符集", definition:"An 8-bit character set that extends ASCII to 256 characters by using the extra bit for additional symbols.", level:"AS", topic:"Data Representation"},
  {term:"Vector graphic", cn:"矢量图形", cn_def:"用几何对象及其属性（而非像素）描述的可缩放图像", definition:"An image defined by geometric drawing objects and their properties rather than pixels, so it scales without loss of quality.", level:"AS", topic:"Data Representation"},
  {term:"Drawing object", cn:"绘图对象", cn_def:"矢量图形中的一个基本图形元素，如直线、矩形或圆", definition:"A single basic shape in a vector graphic, such as a line, rectangle or circle, defined by its properties.", level:"AS", topic:"Data Representation"},
  {term:"Drawing list", cn:"绘图列表", cn_def:"矢量图形中记录所有绘图对象及其属性的清单", definition:"The list within a vector graphic that records all the drawing objects and their properties.", level:"AS", topic:"Data Representation"},
  {term:"File header", cn:"文件头", cn_def:"位图文件开头存储元数据（如尺寸、色深）的部分", definition:"The part at the start of a file, such as a bitmap, that stores metadata like dimensions and colour depth.", level:"AS", topic:"Data Representation"},
  {term:"Screen resolution", cn:"屏幕分辨率", cn_def:"显示器横向和纵向所能显示的像素数量", definition:"The number of pixels a display can show horizontally and vertically.", level:"AS", topic:"Data Representation"},
  {term:"Sampling", cn:"采样", cn_def:"以固定时间间隔测量模拟信号振幅并记录为数值的过程", definition:"Measuring the amplitude of an analogue signal at regular time intervals and recording each as a numeric value.", level:"AS", topic:"Data Representation"},
  {term:"Analogue data", cn:"模拟数据", cn_def:"随时间连续变化、取值无限多的数据", definition:"Data represented by a continuously varying quantity that can take infinitely many values, such as a real sound wave.", level:"AS", topic:"Data Representation"},
  {term:"Digital data", cn:"数字数据", cn_def:"用离散数值（通常为二进制）表示的数据", definition:"Data represented using discrete values, usually binary, rather than a continuously varying signal.", level:"AS", topic:"Data Representation"},

  /* ---------- Networking (AS) ---------- */
  {term:"Thin client", cn:"瘦客户端", cn_def:"处理和存储主要依赖服务器、自身资源很少的客户端设备", definition:"A client device that relies heavily on a server for processing and storage, having few local resources of its own.", level:"AS", topic:"Networking"},
  {term:"Thick client", cn:"胖客户端", cn_def:"自身具备较强处理和存储能力、较少依赖服务器的客户端设备", definition:"A client device with substantial local processing power and storage that depends little on the server.", level:"AS", topic:"Networking"},
  {term:"Mesh topology", cn:"网状拓扑", cn_def:"设备间多路互连、提供冗余路径的网络布局", definition:"A network layout in which devices have multiple interconnections, providing redundant paths between them.", level:"AS", topic:"Networking"},
  {term:"Hybrid topology", cn:"混合拓扑", cn_def:"由两种或多种基本拓扑组合而成的网络布局", definition:"A network layout that combines two or more of the basic topologies, such as star and bus.", level:"AS", topic:"Networking"},
  {term:"Ethernet", cn:"以太网", cn_def:"规定有线局域网内数据成帧和传输的一族协议标准", definition:"A family of protocol standards that governs how data is framed and transmitted over a wired LAN.", level:"AS", topic:"Networking"},
  {term:"CSMA/CD", cn:"载波侦听多路访问/冲突检测", cn_def:"以太网中设备先侦听信道空闲再发送、检测并重发冲突数据的方法", definition:"Carrier Sense Multiple Access with Collision Detection: an Ethernet method where a device listens before sending and retransmits if a collision is detected.", level:"AS", topic:"Networking"},
  {term:"Data collision", cn:"数据冲突（网络）", cn_def:"共享介质上两设备同时发送、信号相互破坏的情形", definition:"The situation on a shared network medium where two devices transmit at the same time and their signals corrupt each other.", level:"AS", topic:"Networking"},
  {term:"Bridge", cn:"网桥", cn_def:"连接两个局域网段、依 MAC 地址转发帧的设备", definition:"A device that connects two LAN segments and forwards frames between them based on MAC addresses.", level:"AS", topic:"Networking"},
  {term:"Repeater", cn:"中继器", cn_def:"接收并放大再生信号以延长网络传输距离的设备", definition:"A device that receives and regenerates a network signal to extend the distance it can travel.", level:"AS", topic:"Networking"},
  {term:"Modem", cn:"调制解调器", cn_def:"在数字数据与传输用模拟信号间相互转换的设备", definition:"A device that converts digital data to an analogue signal for transmission and back again, e.g. over a telephone line.", level:"AS", topic:"Networking"},
  {term:"World Wide Web", cn:"万维网", cn_def:"通过互联网访问的互连网页和资源的集合", definition:"The collection of interlinked web pages and resources accessed over the internet, distinct from the internet itself.", example:"The World Wide Web runs on top of the internet.", level:"AS", topic:"Networking"},
  {term:"Internet", cn:"互联网", cn_def:"全球互连网络组成的基础设施，万维网等服务在其上运行", definition:"The global infrastructure of interconnected networks on which services such as the World Wide Web run.", level:"AS", topic:"Networking"},
  {term:"IPv4", cn:"IPv4 地址", cn_def:"由四个 0-255 数字组成的 32 位 IP 地址格式", definition:"A 32-bit IP address format written as four numbers from 0 to 255 separated by dots.", level:"AS", topic:"Networking"},
  {term:"IPv6", cn:"IPv6 地址", cn_def:"用八组十六进制表示的 128 位 IP 地址，空间极大", definition:"A 128-bit IP address format written as eight groups of hexadecimal digits, giving a far larger address space than IPv4.", level:"AS", topic:"Networking"},
  {term:"Public IP address", cn:"公网 IP 地址", cn_def:"在整个互联网上唯一、可全球路由的 IP 地址", definition:"An IP address that is unique across the whole internet and can be routed globally.", level:"AS", topic:"Networking"},
  {term:"Private IP address", cn:"私有 IP 地址", cn_def:"仅在局域网内部使用、不能在互联网上直接路由的地址", definition:"An IP address used only within a private network and not routable directly on the internet.", level:"AS", topic:"Networking"},
  {term:"Static IP address", cn:"静态 IP 地址", cn_def:"固定分配给设备、不随连接改变的 IP 地址", definition:"An IP address permanently assigned to a device so that it does not change between connections.", level:"AS", topic:"Networking"},
  {term:"Dynamic IP address", cn:"动态 IP 地址", cn_def:"每次连接由服务器临时分配、可能变化的 IP 地址", definition:"An IP address assigned temporarily by a server each time a device connects, and which may change.", level:"AS", topic:"Networking"},
  {term:"Fibre-optic cable", cn:"光纤电缆", cn_def:"用光脉冲在玻璃纤维中传输数据、带宽高抗干扰的电缆", definition:"A cable that transmits data as pulses of light along glass fibres, offering high bandwidth and low interference.", level:"AS", topic:"Networking"},
  {term:"Copper cable", cn:"铜缆", cn_def:"用电信号在铜导线中传输数据的电缆", definition:"A cable that carries data as electrical signals along copper wires.", level:"AS", topic:"Networking"},
  {term:"Wireless network interface card", cn:"无线网卡", cn_def:"通过无线电信号让设备接入无线网络的硬件（WNIC）", definition:"Hardware that lets a device connect to a wireless network using radio signals; abbreviated WNIC.", level:"AS", topic:"Networking"},
  {term:"On-demand streaming", cn:"点播流", cn_def:"用户随时请求、从存储的媒体开始播放的流式传输", definition:"Bit streaming of stored media that a user can start playing at any time they choose.", level:"AS", topic:"Networking"},
  {term:"Real-time streaming", cn:"实时流", cn_def:"事件发生的同时进行编码并传输播放的流式传输", definition:"Bit streaming in which media is encoded and transmitted for playback as the live event happens.", level:"AS", topic:"Networking"},

  /* ---------- Hardware (AS) ---------- */
  {term:"Static RAM", cn:"静态内存", cn_def:"用触发器存储、无需刷新、速度快成本高的 RAM（SRAM）", definition:"Static RAM: memory that stores each bit in a flip-flop, needs no refreshing and is fast but costly; abbreviated SRAM.", level:"AS", topic:"Hardware"},
  {term:"Dynamic RAM", cn:"动态内存", cn_def:"用电容存储、需定期刷新、密度高成本低的 RAM（DRAM）", definition:"Dynamic RAM: memory that stores each bit in a capacitor and must be refreshed regularly; denser and cheaper than SRAM.", level:"AS", topic:"Hardware"},
  {term:"PROM", cn:"可编程只读存储器", cn_def:"出厂后可一次性写入、之后不可更改的只读存储器", definition:"Programmable Read Only Memory: ROM that can be written once after manufacture and then cannot be changed.", level:"AS", topic:"Hardware"},
  {term:"EPROM", cn:"可擦可编程只读存储器", cn_def:"可用紫外线擦除后重新编程的只读存储器", definition:"Erasable Programmable Read Only Memory: ROM that can be erased with ultraviolet light and reprogrammed.", level:"AS", topic:"Hardware"},
  {term:"Buffer", cn:"缓冲区", cn_def:"临时存放数据以缓和速度不同设备间传输差异的存储区", definition:"A temporary storage area that holds data to smooth the difference in speed between devices during transfer.", level:"AS", topic:"Hardware"},
  {term:"Primary memory", cn:"主存储器", cn_def:"处理器可直接访问的存储器，包括 RAM 和 ROM", definition:"Memory that the processor can access directly, comprising RAM and ROM.", level:"AS", topic:"Hardware"},
  {term:"Actuator", cn:"执行器", cn_def:"接收控制信号并将其转为物理动作的部件，如电机或阀门", definition:"A component that receives a control signal and turns it into a physical action, such as a motor or valve.", level:"AS", topic:"Hardware"},
  {term:"Sensor", cn:"传感器", cn_def:"测量温度、压力等物理量并输出可供处理数据的设备", definition:"A device that measures a physical quantity such as temperature or pressure and outputs data for processing.", level:"AS", topic:"Hardware"},
  {term:"Feedback", cn:"反馈", cn_def:"控制系统中把输出结果送回、用以调整下一步动作的过程", definition:"In a control system, returning the effect of an output to influence the next action taken.", level:"AS", topic:"Hardware"},
  {term:"Monitoring system", cn:"监测系统", cn_def:"用传感器读取数据、只记录或报告而不控制物理过程的系统", definition:"A system that uses sensors to read data and only records or reports it, without controlling the physical process.", level:"AS", topic:"Hardware"},
  {term:"Control system", cn:"控制系统", cn_def:"用传感器数据并经执行器反馈作用于物理过程的系统", definition:"A system that uses sensor data and, through feedback, acts on a physical process using actuators.", level:"AS", topic:"Hardware"},
  {term:"Core", cn:"内核（处理器）", cn_def:"处理器中能独立执行指令的一个处理单元", definition:"An individual processing unit within a processor that can execute instructions independently.", level:"AS", topic:"Hardware"},
  {term:"Bus width", cn:"总线宽度", cn_def:"总线能同时并行传输的位数，影响数据传输量", definition:"The number of bits a bus can carry in parallel at once, affecting how much data is transferred per cycle.", level:"AS", topic:"Hardware"},
  {term:"Index register", cn:"变址寄存器", cn_def:"存放偏移量、与地址相加以支持变址寻址的寄存器（IX）", definition:"A register holding a value added to an address to support indexed addressing; abbreviated IX.", level:"AS", topic:"Hardware"},
  {term:"Current instruction register", cn:"当前指令寄存器", cn_def:"存放当前正在译码执行的指令的寄存器（CIR）", definition:"A register that holds the instruction currently being decoded and executed; abbreviated CIR.", level:"AS", topic:"Hardware"},
  {term:"Status register", cn:"状态寄存器", cn_def:"存放运算结果标志位（如进位、零）的寄存器", definition:"A register holding flag bits that record the outcome of operations, such as carry or zero flags.", level:"AS", topic:"Hardware"},
  {term:"Von Neumann architecture", cn:"冯·诺依曼体系结构", cn_def:"指令和数据共用同一存储器、共享总线的计算机模型", definition:"A computer model in which instructions and data share the same memory and are accessed over a common bus.", level:"AS", topic:"Hardware"},
  {term:"Stored program concept", cn:"存储程序概念", cn_def:"程序指令与数据一同存放在内存中、可被处理器逐条取出执行的思想", definition:"The principle that program instructions are stored in memory alongside data and fetched one at a time for execution.", level:"AS", topic:"Hardware"},
  {term:"USB", cn:"通用串行总线", cn_def:"连接外设与计算机的标准串行接口（USB）", definition:"Universal Serial Bus: a standard serial interface for connecting peripheral devices to a computer.", level:"AS", topic:"Hardware"},
  {term:"HDMI", cn:"高清多媒体接口", cn_def:"传输高清视频和音频的数字接口（HDMI）", definition:"High Definition Multimedia Interface: a digital interface that carries high-definition video and audio.", level:"AS", topic:"Hardware"},

  /* ---------- Software (AS) ---------- */
  {term:"Dynamic link library", cn:"动态链接库", cn_def:"存放可供多个程序运行时共享调用的代码模块的文件（DLL）", definition:"A file of code modules that programs can share and call at run time rather than compile in; abbreviated DLL.", level:"AS", topic:"Software"},
  {term:"Program library", cn:"程序库", cn_def:"预先编写、可被其他程序复用的例程集合", definition:"A collection of pre-written routines that can be reused by other programs.", level:"AS", topic:"Software"},
  {term:"Memory management", cn:"内存管理", cn_def:"操作系统分配、跟踪并回收各程序所用内存的任务", definition:"The operating system task of allocating, tracking and reclaiming the memory used by programs.", level:"AS", topic:"Software"},
  {term:"File management", cn:"文件管理", cn_def:"操作系统组织、存取和控制存储中文件访问的任务", definition:"The operating system task of organising, storing and controlling access to files on storage.", level:"AS", topic:"Software"},
  {term:"Process management", cn:"进程管理", cn_def:"操作系统创建、调度并终止进程、分配处理器时间的任务", definition:"The operating system task of creating, scheduling and ending processes and allocating processor time to them.", level:"AS", topic:"Software"},
  {term:"Defragmentation", cn:"碎片整理", cn_def:"把磁盘上零散的文件片段重新排列为连续块以加快访问", definition:"Rearranging scattered fragments of files on a disk into contiguous blocks to speed up access.", level:"AS", topic:"Software"},
  {term:"Breakpoint", cn:"断点", cn_def:"调试时让程序暂停以便检查变量值的标记点", definition:"A marked point in a program where execution pauses during debugging so variable values can be inspected.", level:"AS", topic:"Software"},
  {term:"Single stepping", cn:"单步执行", cn_def:"调试时一次只执行一行代码以观察程序行为", definition:"A debugging technique that executes a program one statement at a time to observe its behaviour.", level:"AS", topic:"Software"},
  {term:"Prettyprint", cn:"美化打印/格式化", cn_def:"IDE 用缩进和着色排版源代码使其更易读的功能", definition:"An IDE feature that formats source code with indentation and colour to make it easier to read.", level:"AS", topic:"Software"},

  /* ---------- Security (AS) ---------- */
  {term:"Malware", cn:"恶意软件", cn_def:"旨在破坏、扰乱或未经授权访问系统的软件总称", definition:"A general term for software designed to damage, disrupt or gain unauthorised access to a computer system.", level:"AS", topic:"Software"},
  {term:"Virus", cn:"计算机病毒", cn_def:"依附于其他程序、执行时自我复制并传播的恶意软件", definition:"Malware that attaches itself to another program and replicates and spreads when that program is run.", level:"AS", topic:"Software"},
  {term:"Spyware", cn:"间谍软件", cn_def:"秘密监视用户活动并回传信息的恶意软件", definition:"Malware that secretly monitors a user's activity and sends the gathered information back to an attacker.", level:"AS", topic:"Software"},
  {term:"Phishing", cn:"网络钓鱼", cn_def:"伪装成可信来源发消息诱骗用户泄露敏感信息的手段", definition:"Sending messages that appear to come from a trusted source to trick users into revealing sensitive information.", level:"AS", topic:"Software"},
  {term:"Pharming", cn:"域名欺骗/网址嫁接", cn_def:"暗中把用户重定向到假冒网站以窃取信息的攻击", definition:"An attack that secretly redirects a user from a genuine website to a fake one to steal their information.", level:"AS", topic:"Software"},
  {term:"Biometrics", cn:"生物识别", cn_def:"用指纹、面容等独特身体特征来验证身份的方法", definition:"Using unique physical characteristics such as fingerprints or facial features to verify a person's identity.", level:"AS", topic:"Software"},
  {term:"Authentication", cn:"身份验证/鉴别", cn_def:"确认用户或系统身份确实为其所声称身份的过程", definition:"The process of confirming that a user or system is genuinely who or what it claims to be.", level:"AS", topic:"Software"},
  {term:"Access rights", cn:"访问权限", cn_def:"规定各用户可读、写或执行哪些数据和资源的许可设置", definition:"Permissions that determine which data and resources a user may read, write or execute.", level:"AS", topic:"Software"},

  /* ---------- Databases (AS) ---------- */
  {term:"Entity", cn:"实体", cn_def:"数据库中要存储数据的一类事物，如学生或图书", definition:"A thing about which data is stored in a database, such as a student or a book, usually modelled as a table.", level:"AS", topic:"Databases"},
  {term:"Table", cn:"表", cn_def:"关系数据库中由行(记录)和列(字段)组成、存某类实体的结构", definition:"A structure of rows (records) and columns (fields) in a relational database that stores data about one entity type.", level:"AS", topic:"Databases"},
  {term:"Entity-relationship diagram", cn:"实体关系图", cn_def:"用图形展示实体及其之间关系的数据库设计工具（E-R 图）", definition:"A diagram that shows entities and the relationships between them to document a database design; abbreviated E-R diagram.", level:"AS", topic:"Databases"},
  {term:"One-to-many relationship", cn:"一对多关系", cn_def:"一个实体的记录可与另一实体的多条记录关联的关系", definition:"A relationship in which one record of an entity can be linked to many records of another entity.", level:"AS", topic:"Databases"},
  {term:"Many-to-many relationship", cn:"多对多关系", cn_def:"两实体的记录可相互多向关联，通常需拆分为链接表", definition:"A relationship in which records of two entities can each link to many records of the other, usually resolved with a link table.", level:"AS", topic:"Databases"},
  {term:"File-based approach", cn:"基于文件的方法", cn_def:"用彼此独立的文件而非数据库存储数据的方式，易冗余不一致", definition:"Storing data in separate independent files rather than a database, which tends to cause redundancy and inconsistency.", level:"AS", topic:"Databases"},
  {term:"Data redundancy", cn:"数据冗余", cn_def:"同一数据在多处重复存储、浪费空间且易不一致", definition:"The unnecessary duplication of the same data in more than one place, wasting space and risking inconsistency.", level:"AS", topic:"Databases"},

  /* ---------- Algorithms (AS) ---------- */
  {term:"Sequence", cn:"顺序结构", cn_def:"程序步骤按书写先后一条接一条执行的基本控制结构", definition:"The basic control construct in which program steps are carried out one after another in the order written.", level:"AS", topic:"Algorithms"},
  {term:"Flowchart", cn:"流程图", cn_def:"用标准符号和箭头图示算法步骤和流程的图", definition:"A diagram that represents the steps and flow of an algorithm using standard symbols connected by arrows.", level:"AS", topic:"Algorithms"},
  {term:"Stepwise refinement", cn:"逐步求精", cn_def:"把算法反复细化为更小步骤直至可编程的过程", definition:"The process of repeatedly breaking an algorithm into smaller steps until it is detailed enough to be programmed.", level:"AS", topic:"Algorithms"},
  {term:"Identifier", cn:"标识符", cn_def:"程序中给变量、常量或子程序等命名的名称", definition:"A name given to a program item such as a variable, constant or subroutine.", level:"AS", topic:"Algorithms"},
  {term:"Identifier table", cn:"标识符表", cn_def:"列出算法所用各标识符及其含义和数据类型的表", definition:"A table listing the identifiers used in an algorithm together with their meaning and data type.", level:"AS", topic:"Algorithms"},
  {term:"Range check", cn:"范围检查", cn_def:"验证输入值是否落在允许的上下限之间", definition:"A validation check that tests whether an input value lies between an allowed lower and upper limit.", level:"AS", topic:"Algorithms"},
  {term:"Format check", cn:"格式检查", cn_def:"验证数据是否符合规定的字符样式，如日期格式", definition:"A validation check that tests whether data matches a required pattern of characters, such as a date format.", level:"AS", topic:"Algorithms"},
  {term:"Length check", cn:"长度检查", cn_def:"验证输入数据的字符个数是否符合要求", definition:"A validation check that tests whether the number of characters in an input is acceptable.", level:"AS", topic:"Algorithms"},
  {term:"Presence check", cn:"存在性检查", cn_def:"验证必填字段是否确实被输入、未留空", definition:"A validation check that tests whether a required field has actually been entered and is not left blank.", level:"AS", topic:"Algorithms"},
  {term:"Parity check", cn:"奇偶校验", cn_def:"检查一组位中 1 的个数奇偶性是否正确以侦测传输错误", definition:"A check that tests whether the number of 1 bits in a group has the expected odd or even parity to detect transmission errors.", level:"AS", topic:"Algorithms"},
  {term:"Double entry", cn:"双重录入", cn_def:"两次输入同一数据并比对以核对是否录入准确的校验法", definition:"A verification method in which data is entered twice and the two versions compared to check for entry errors.", level:"AS", topic:"Algorithms"},

  /* ---------- Programming (AS) ---------- */
  {term:"Assignment", cn:"赋值", cn_def:"把一个值存入变量的操作", definition:"The operation of storing a value in a variable.", example:"The Assignment x <- 5 stores 5 in x.", level:"AS", topic:"Programming"},
  {term:"CASE statement", cn:"CASE 分支语句", cn_def:"依据一个变量取值从多分支中选一路执行的选择结构", definition:"A selection construct that chooses one of several branches to run according to the value of a single variable.", level:"AS", topic:"Programming"},
  {term:"Count-controlled loop", cn:"计数循环", cn_def:"预先知道重复次数、循环固定次数的循环（FOR）", definition:"A loop that repeats a known, fixed number of times, typically a FOR loop.", level:"AS", topic:"Programming"},
  {term:"Pre-condition loop", cn:"前测循环", cn_def:"每次循环前先检查条件、条件为真才执行的循环（WHILE）", definition:"A loop that tests its condition before each iteration and runs the body only while the condition is true, e.g. WHILE.", level:"AS", topic:"Programming"},
  {term:"Post-condition loop", cn:"后测循环", cn_def:"先执行循环体再检查条件、至少执行一次的循环（REPEAT）", definition:"A loop that runs its body once before testing the condition, so it always executes at least once, e.g. REPEAT UNTIL.", level:"AS", topic:"Programming"},
  {term:"Argument", cn:"实参（实际参数）", cn_def:"调用子程序时实际传入、赋给形参的值", definition:"The actual value passed to a subroutine when it is called, which is assigned to a parameter.", level:"AS", topic:"Programming"},
  {term:"Pass by value", cn:"传值调用", cn_def:"把实参的一份副本传给子程序，改动不影响原变量", definition:"Passing a copy of an argument's value to a subroutine, so changes inside it do not affect the original variable.", level:"AS", topic:"Programming"},
  {term:"Pass by reference", cn:"传引用调用", cn_def:"把实参的地址传给子程序，子程序内改动会影响原变量", definition:"Passing the address of an argument to a subroutine, so changes inside it do affect the original variable.", level:"AS", topic:"Programming"},
  {term:"Return value", cn:"返回值", cn_def:"函数执行后交回调用处的单个结果值", definition:"The single result value that a function passes back to the point where it was called.", level:"AS", topic:"Programming"},
  {term:"Subroutine", cn:"子程序/子例程", cn_def:"完成特定任务、可被调用的具名代码块，含过程和函数", definition:"A named, callable block of code that carries out a specific task; procedures and functions are both subroutines.", level:"AS", topic:"Programming"},
  {term:"Real (data type)", cn:"实型", cn_def:"存储带小数部分数值的数据类型", definition:"A data type that stores a number with a fractional part.", level:"AS", topic:"Programming"},
  {term:"Char", cn:"字符型", cn_def:"存储单个字符的数据类型", definition:"A data type that stores a single character.", level:"AS", topic:"Programming"},
  {term:"Date (data type)", cn:"日期型", cn_def:"存储日历日期的数据类型", definition:"A data type that stores a calendar date.", level:"AS", topic:"Programming"},
  {term:"Two-dimensional array", cn:"二维数组", cn_def:"用行、列两个下标访问元素、类似表格的数组", definition:"An array whose elements are accessed by two indices, a row and a column, like a table.", level:"AS", topic:"Programming"},
  {term:"Upper bound", cn:"上界", cn_def:"数组中允许的最大有效下标", definition:"The largest valid index in an array.", level:"AS", topic:"Programming"},
  {term:"Lower bound", cn:"下界", cn_def:"数组中允许的最小有效下标", definition:"The smallest valid index in an array.", level:"AS", topic:"Programming"},
  {term:"Totalling", cn:"累加求和", cn_def:"在循环中把各值不断加到一个累加变量上的技术", definition:"A programming technique that keeps adding values to a running total variable inside a loop.", level:"AS", topic:"Programming"},
  {term:"Counting", cn:"计数", cn_def:"在循环中每满足条件就让计数变量加一的技术", definition:"A programming technique that increases a counter variable by one each time a condition is met inside a loop.", level:"AS", topic:"Programming"},
  {term:"Text file", cn:"文本文件", cn_def:"以字符行形式存储、可读写的数据文件", definition:"A file that stores data as lines of characters, which can be read from and written to line by line.", level:"AS", topic:"Programming"},

  /* ==========================================================
     ========================  A2 级  ========================
     ========================================================== */

  /* ---------- Data Representation (A2) ---------- */
  {term:"User-defined data type", cn:"用户自定义类型", cn_def:"由程序员基于现有类型定义、以贴合问题的新数据类型", definition:"A data type created by the programmer from existing types to suit a particular problem.", level:"A2", topic:"Data Structures"},
  {term:"Enumerated type", cn:"枚举类型", cn_def:"由一组具名有序值定义的非复合用户自定义类型", definition:"A non-composite user-defined type defined by a fixed, ordered list of named values.", example:"An Enumerated type could list the days of the week.", level:"A2", topic:"Data Structures"},
  {term:"Composite data type", cn:"复合数据类型", cn_def:"由多个其他类型的数据项组合而成的类型，如记录或类", definition:"A data type built by combining several items of other types, such as a record, set or class.", level:"A2", topic:"Data Structures"},
  {term:"Non-composite data type", cn:"非复合数据类型", cn_def:"不由其他类型组合而成的基础类型，如枚举或指针", definition:"A data type that is not built from other types, such as an enumerated type or a pointer.", level:"A2", topic:"Data Structures"},
  {term:"Set", cn:"集合", cn_def:"存放一组无序且不重复元素的复合数据类型", definition:"A composite data type that holds an unordered collection of distinct values with no duplicates.", level:"A2", topic:"Data Structures"},
  {term:"Underflow", cn:"下溢", cn_def:"计算结果的绝对值太小、无法在可用位数中表示时的错误", definition:"An error that occurs when the result of a calculation is too small in magnitude to be represented in the available bits.", level:"A2", topic:"Data Representation"},
  {term:"Rounding error", cn:"舍入误差", cn_def:"因二进制只能近似表示某些实数而产生的微小偏差", definition:"A small inaccuracy that arises because a binary representation can only approximate certain real numbers.", level:"A2", topic:"Data Representation"},

  /* ---------- File Organisation (A2) ---------- */
  {term:"Random file", cn:"随机文件/直接存取文件", cn_def:"用记录键经哈希定位、可直接存取任意记录的文件", definition:"A file whose records are located using a hashing algorithm on a key, allowing any record to be accessed directly.", level:"A2", topic:"Data Structures"},
  {term:"Sequential access", cn:"顺序访问", cn_def:"从头逐条读取记录直到到达目标的文件访问方式", definition:"A method of file access in which records are read one after another from the start until the required one is reached.", level:"A2", topic:"Data Structures"},
  {term:"Direct access", cn:"直接访问", cn_def:"不必读取前面记录、直接定位并读取所需记录的方式", definition:"A method of file access that locates and reads the required record directly without reading the ones before it.", level:"A2", topic:"Data Structures"},
  {term:"Hashing algorithm", cn:"哈希算法", cn_def:"由记录键计算其在文件或表中存储位置的算法", definition:"An algorithm that calculates the storage location of a record in a file or table from its key.", level:"A2", topic:"Data Structures"},

  /* ---------- Boolean Algebra & Logic Circuits (A2) ---------- */
  {term:"Half adder", cn:"半加器", cn_def:"把两个一位二进制数相加、输出和与进位、不含进位输入的电路", definition:"A logic circuit that adds two single binary digits, producing a sum and a carry, but with no carry input.", level:"A2", topic:"Logic Gates"},
  {term:"Full adder", cn:"全加器", cn_def:"把两个位连同一个进位输入相加、输出和与进位的电路", definition:"A logic circuit that adds two binary digits together with a carry-in, producing a sum and a carry-out.", level:"A2", topic:"Logic Gates"},
  {term:"Flip-flop", cn:"触发器", cn_def:"能存储一位数据、由输入触发改变状态的时序电路", definition:"A sequential logic circuit that can store one bit of data, changing state when triggered by its inputs.", level:"A2", topic:"Logic Gates"},
  {term:"SR flip-flop", cn:"SR 触发器", cn_def:"由置位S和复位R两输入控制、存一位的触发器", definition:"A flip-flop with Set (S) and Reset (R) inputs that stores one bit, setting or clearing its output.", level:"A2", topic:"Logic Gates"},
  {term:"JK flip-flop", cn:"JK 触发器", cn_def:"改进 SR、消除非法输入并可在时钟下翻转状态的触发器", definition:"A flip-flop that improves on the SR type by removing the invalid input state and toggling its output on a clock pulse.", level:"A2", topic:"Logic Gates"},
  {term:"Boolean algebra", cn:"布尔代数", cn_def:"用与、或、非等运算处理真假值、用于化简逻辑表达式的数学分支", definition:"A branch of algebra using AND, OR and NOT on true/false values, used to manipulate and simplify logic expressions.", level:"A2", topic:"Logic Gates"},
  {term:"De Morgan's laws", cn:"德摩根定律", cn_def:"把与非、或非相互转换、用于化简布尔表达式的一对规则", definition:"A pair of Boolean rules that convert NOT of an AND into an OR of NOTs and vice versa, used to simplify expressions.", level:"A2", topic:"Logic Gates"},
  {term:"Karnaugh map", cn:"卡诺图", cn_def:"用网格图示真值表、便于分组化简布尔表达式的工具（K 图）", definition:"A grid representation of a truth table that helps simplify a Boolean expression by grouping adjacent 1s; abbreviated K-map.", level:"A2", topic:"Logic Gates"},

  /* ---------- Hardware & Virtual Machines (A2) ---------- */
  {term:"RISC", cn:"精简指令集计算机", cn_def:"指令简单、数量少、多用寄存器且便于流水线的处理器（RISC）", definition:"Reduced Instruction Set Computer: a processor with a small set of simple instructions, many registers and easy pipelining.", level:"A2", topic:"Hardware"},
  {term:"CISC", cn:"复杂指令集计算机", cn_def:"指令多而复杂、单条可完成较多操作的处理器（CISC）", definition:"Complex Instruction Set Computer: a processor with many complex instructions, each able to carry out several low-level operations.", level:"A2", topic:"Hardware"},
  {term:"SISD", cn:"单指令单数据", cn_def:"单处理器每次对单一数据流执行单一指令流的架构", definition:"Single Instruction Single Data: an architecture where one processor executes one instruction stream on one data stream.", level:"A2", topic:"Hardware"},
  {term:"SIMD", cn:"单指令多数据", cn_def:"同一条指令同时作用于多个数据流的并行架构", definition:"Single Instruction Multiple Data: a parallel architecture where one instruction operates on many data streams at once.", level:"A2", topic:"Hardware"},
  {term:"MIMD", cn:"多指令多数据", cn_def:"多处理器各自对不同数据执行不同指令流的并行架构", definition:"Multiple Instruction Multiple Data: a parallel architecture where several processors run different instruction streams on different data.", level:"A2", topic:"Hardware"},
  {term:"Massively parallel computer", cn:"大规模并行计算机", cn_def:"由极多处理器协同并行工作以求高性能的计算机", definition:"A computer that links a very large number of processors working in parallel to achieve high performance.", level:"A2", topic:"Hardware"},
  {term:"Virtual machine", cn:"虚拟机", cn_def:"用软件模拟出的、在物理主机上运行的计算机", definition:"A software emulation of a computer that runs on top of a physical host machine.", level:"A2", topic:"Hardware"},
  {term:"Parallel processing", cn:"并行处理", cn_def:"多个处理器同时执行任务不同部分以加快计算的方式", definition:"Carrying out a task faster by having several processors execute different parts of it at the same time.", level:"A2", topic:"Hardware"},
  {term:"Multi-tasking", cn:"多任务", cn_def:"操作系统在多个进程间快速切换、看似同时运行的能力", definition:"The ability of an operating system to switch rapidly between several processes so they appear to run at the same time.", level:"A2", topic:"Hardware"},
  {term:"Running state", cn:"运行态", cn_def:"进程正占用处理器、正在被执行的状态", definition:"The process state in which a process currently holds the processor and is being executed.", level:"A2", topic:"Hardware"},
  {term:"Ready state", cn:"就绪态", cn_def:"进程已准备好、只等分配处理器即可运行的状态", definition:"The process state in which a process is ready to run and is only waiting to be given the processor.", level:"A2", topic:"Hardware"},
  {term:"Blocked state", cn:"阻塞态", cn_def:"进程正等待输入输出等事件、暂时无法运行的状态", definition:"The process state in which a process cannot run because it is waiting for an event such as input or output.", level:"A2", topic:"Hardware"},
  {term:"Shortest job first", cn:"最短作业优先", cn_def:"优先调度预计运行时间最短进程的调度法", definition:"A scheduling method that runs the process with the shortest estimated execution time next.", level:"A2", topic:"Hardware"},
  {term:"First come first served", cn:"先来先服务", cn_def:"按进程到达顺序依次分配处理器的调度法", definition:"A scheduling method that gives the processor to processes in the order they arrive.", level:"A2", topic:"Hardware"},
  {term:"Shortest remaining time", cn:"最短剩余时间", cn_def:"优先调度剩余执行时间最短进程的抢占式调度法", definition:"A preemptive scheduling method that runs the process with the least remaining execution time next.", level:"A2", topic:"Hardware"},
  {term:"Segmentation", cn:"分段", cn_def:"把内存按程序逻辑分成不定长的段来管理内存的方法", definition:"A memory management method that divides memory into variable-length segments matching a program's logical parts.", level:"A2", topic:"Hardware"},
  {term:"Interrupt handler", cn:"中断处理程序", cn_def:"操作系统内核中响应并处理中断的例程", definition:"A routine in the operating system kernel that responds to and services interrupts.", level:"A2", topic:"Hardware"},
  {term:"Multi-core processor", cn:"多核处理器", cn_def:"在单一芯片上集成多个处理核心、可并行执行的处理器", definition:"A processor that contains several processing cores on one chip, allowing instructions to be executed in parallel.", level:"A2", topic:"Hardware"},

  /* ---------- Security (A2) ---------- */
  {term:"Plaintext", cn:"明文", cn_def:"加密之前或解密之后的原始可读数据", definition:"The original readable data before it is encrypted or after it has been decrypted.", level:"A2", topic:"Security"},
  {term:"Ciphertext", cn:"密文", cn_def:"明文经加密后得到的不可读数据", definition:"The unreadable data produced when plaintext is encrypted.", level:"A2", topic:"Security"},
  {term:"Symmetric key cryptography", cn:"对称密钥密码学", cn_def:"加密和解密使用同一把密钥的密码体制", definition:"A cryptographic system that uses the same secret key to both encrypt and decrypt data.", level:"A2", topic:"Security"},
  {term:"Asymmetric key cryptography", cn:"非对称密钥密码学", cn_def:"用公钥和配对私钥分别加解密的密码体制", definition:"A cryptographic system that uses a public key and a matching private key, one to encrypt and the other to decrypt.", level:"A2", topic:"Security"},
  {term:"Quantum cryptography", cn:"量子密码学", cn_def:"利用量子力学原理安全分发密钥、窃听会被察觉的加密方法", definition:"Encryption that uses the principles of quantum mechanics to distribute keys securely, so eavesdropping can be detected.", level:"A2", topic:"Security"},
  {term:"Certificate authority", cn:"证书颁发机构", cn_def:"签发并担保数字证书、把公钥绑定到身份的可信第三方", definition:"A trusted third party that issues and vouches for digital certificates, binding a public key to an identity.", level:"A2", topic:"Security"},

  /* ---------- AI (A2) ---------- */
  {term:"A* algorithm", cn:"A* 算法", cn_def:"用代价加启发式估计寻找图中最短路径的搜索算法", definition:"A graph search algorithm that finds a shortest path by combining the cost so far with a heuristic estimate to the goal.", level:"A2", topic:"AI"},
  {term:"Dijkstra's algorithm", cn:"迪杰斯特拉算法", cn_def:"在带权图中求单源到各点最短路径的算法", definition:"An algorithm that finds the shortest paths from a single source vertex to all others in a weighted graph.", level:"A2", topic:"AI"},
  {term:"Heuristic", cn:"启发式", cn_def:"用经验性估计引导搜索、加快求解的近似规则", definition:"A rule-of-thumb estimate that guides a search toward a solution more quickly, as used by the A* algorithm.", level:"A2", topic:"AI"},
  {term:"Deep learning", cn:"深度学习", cn_def:"使用多层神经网络从大量数据中学习复杂模式的机器学习", definition:"Machine learning that uses neural networks with many layers to learn complex patterns from large amounts of data.", level:"A2", topic:"AI"},
  {term:"Reinforcement learning", cn:"强化学习", cn_def:"智能体通过奖励和惩罚试错学习最优行为的机器学习", definition:"Machine learning in which an agent learns the best actions by trial and error, guided by rewards and penalties.", level:"A2", topic:"AI"},
  {term:"Regression", cn:"回归", cn_def:"从数据拟合关系以预测连续数值输出的机器学习方法", definition:"A machine learning method that fits a relationship in data to predict a continuous numeric output.", level:"A2", topic:"AI"},
  {term:"Weight (neural network)", cn:"权重（神经网络）", cn_def:"神经网络中调节各输入影响、训练时被调整的数值", definition:"A value in a neural network that scales the influence of an input and is adjusted during training.", level:"A2", topic:"AI"},

  /* ---------- Data Structures (A2) ---------- */
  {term:"Dictionary", cn:"字典（数据结构）", cn_def:"存放键值对、按键快速查取值的抽象数据类型", definition:"An abstract data type that stores key-value pairs and allows fast lookup of a value by its key.", level:"A2", topic:"Data Structures"},

  /* ---------- Algorithms (A2) ---------- */
  {term:"Unwinding", cn:"递归展开/回退", cn_def:"递归到达基线后逐层返回、依次弹出栈帧的过程", definition:"The process by which a recursive call returns level by level after the base case is reached, popping stack frames in turn.", level:"A2", topic:"Algorithms"},

  /* ---------- Paradigms (A2) ---------- */
  {term:"Imperative programming", cn:"命令式编程", cn_def:"通过一系列改变程序状态的语句明确指定执行步骤的范式", definition:"A paradigm that specifies explicit steps as a sequence of statements that change the program's state.", level:"A2", topic:"Paradigms"},
  {term:"Aggregation", cn:"聚合/包含", cn_def:"一个对象包含指向其他对象的引用的整体-部分关系", definition:"An OOP relationship in which one object contains references to other objects, modelling a whole-part relationship.", level:"A2", topic:"Paradigms"},
  {term:"Instance", cn:"实例", cn_def:"由某个类创建出来的一个具体对象", definition:"A specific object created from a class.", level:"A2", topic:"Paradigms"},
  {term:"Fact", cn:"事实（声明式）", cn_def:"声明式编程中陈述为真的一条基本信息", definition:"In declarative programming, a basic statement asserted to be true, used together with rules to answer queries.", level:"A2", topic:"Paradigms"},
  {term:"Rule", cn:"规则（声明式）", cn_def:"声明式编程中由已知事实推导新结论的逻辑关系", definition:"In declarative programming, a logical relationship that lets new conclusions be derived from known facts.", level:"A2", topic:"Paradigms"},

  /* ---------- Software Development (A2) ---------- */
  {term:"Exception", cn:"异常", cn_def:"程序运行时发生的、打断正常流程的错误或特殊情况", definition:"An error or unusual condition that arises while a program runs and interrupts its normal flow.", level:"A2", topic:"Programming"},
  {term:"Exception handling", cn:"异常处理", cn_def:"用专门代码捕获并应对运行时异常、避免程序崩溃的机制", definition:"A mechanism that catches and responds to run-time exceptions using dedicated code so the program does not crash.", example:"Exception handling can catch a division by zero and recover gracefully.", level:"A2", topic:"Programming"},
];

if (typeof window !== 'undefined') {
  window.CS_WORDS_EXPANSION = CS_WORDS_EXPANSION;
  if (Array.isArray(window.CS_WORDS)) window.CS_WORDS.push.apply(window.CS_WORDS, CS_WORDS_EXPANSION);
}
