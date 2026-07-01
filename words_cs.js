/* ============================================================
   CS 背单词对战 · 词库 words_cs.js  (9618 Computer Science)
   纯数据文件，零依赖、零副作用（只声明全局常量）。
   暴露到全局：CS_WORDS, CS_TOPICS

   每一项字段：
     term       : 术语（英文）
     definition : 定义（按 CIE 9618 口径，准确、简洁）
     example    : 可选，一句用法/记忆点
     level      : 'AS' | 'A2'
     topic      : 主题分类（用于按 topic 选关）

   注：定义面向 9618 教学，尽量贴合考纲措辞；个别措辞可按所用教材微调。
   ============================================================ */

const CS_WORDS = [
  /* ==========================================================
     ========================  AS 级  ========================
     ========================================================== */

  /* ---------- Data Representation ---------- */
  {term:"Binary", cn:"二进制", cn_def:"只用 0 和 1 的计数系统，计算机内部据此存储运算", definition:"A number system using only two digits, 0 and 1 (base 2), used internally by all digital computers.", example:"1011 in binary is 11 in denary.", level:"AS", topic:"Data Representation"},
  {term:"Denary", cn:"十进制", cn_def:"用 0 到 9、基数为 10 的日常计数系统", definition:"The base-10 number system using digits 0 to 9, the everyday counting system.", level:"AS", topic:"Data Representation"},
  {term:"Hexadecimal", cn:"十六进制", cn_def:"用 0-9 和 A-F、基数 16 的计数法，常作二进制简写", definition:"A base-16 number system using digits 0-9 and letters A-F, used as a shorthand for binary.", example:"Each Hexadecimal digit represents exactly 4 bits.", level:"AS", topic:"Data Representation"},
  {term:"Bit", cn:"位/比特", cn_def:"取值 0 或 1 的二进制位，是数据的最小单位", definition:"A binary digit, either 0 or 1; the smallest unit of data in a computer.", level:"AS", topic:"Data Representation"},
  {term:"Byte", cn:"字节", cn_def:"由 8 个位组成的一组，是内存最基本的可寻址单位", definition:"A group of 8 bits, the basic addressable unit of memory.", level:"AS", topic:"Data Representation"},
  {term:"Nibble", cn:"半字节", cn_def:"由 4 个位组成，等于半字节，对应一个十六进制数字", definition:"A group of 4 bits, equal to half a byte and one hexadecimal digit.", level:"AS", topic:"Data Representation"},
  {term:"ASCII", cn:"ASCII 编码", cn_def:"用 7 位表示 128 个字符的编码，含字母、数字和控制码", definition:"A character-encoding standard using 7 bits to represent 128 characters, mainly English letters, digits and control codes.", level:"AS", topic:"Data Representation"},
  {term:"Unicode", cn:"统一码", cn_def:"为几乎所有文字的每个字符分配唯一编码，容量远大于 ASCII", definition:"A character-encoding standard that assigns a unique code to every character in most writing systems, allowing far more characters than ASCII.", example:"Unicode can represent characters from almost every writing system.", level:"AS", topic:"Data Representation"},
  {term:"Two's complement", cn:"补码", cn_def:"表示有符号整数的方法，最高位代表负的位权", definition:"A method of representing signed integers in binary, where the most significant bit has a negative place value.", level:"AS", topic:"Data Representation"},
  {term:"Overflow", cn:"溢出", cn_def:"计算结果超出可用位数、无法存储时发生的错误", definition:"An error that occurs when the result of a calculation is too large to be stored in the available number of bits.", level:"AS", topic:"Data Representation"},
  {term:"Bitmap image", cn:"位图图像", cn_def:"以像素网格存储的图像，每个像素带一个颜色值", definition:"An image stored as a grid of pixels, each pixel having a colour value.", level:"AS", topic:"Data Representation"},
  {term:"Resolution", cn:"分辨率", cn_def:"图像所含像素的数量，常写作宽×高", definition:"The number of pixels in an image, often given as width x height.", level:"AS", topic:"Data Representation"},
  {term:"Colour depth", cn:"色彩深度", cn_def:"表示单个像素颜色所用的位数，位数越多颜色越多", definition:"The number of bits used to represent the colour of a single pixel.", example:"8 bits per pixel gives 256 colours.", level:"AS", topic:"Data Representation"},
  {term:"Sample rate", cn:"采样率", cn_def:"录制数字音频时每秒采集的声音样本数，单位赫兹", definition:"The number of samples of a sound taken per second when recording digital audio, measured in hertz.", level:"AS", topic:"Data Representation"},
  {term:"Sample resolution", cn:"采样分辨率/位深", cn_def:"存储每个声音样本所用的位数，位数越多录音越精确", definition:"The number of bits used to store each sound sample; more bits give a more accurate recording.", level:"AS", topic:"Data Representation"},
  {term:"Lossless compression", cn:"无损压缩", cn_def:"能完全还原原始数据的压缩方式", definition:"Compression that reduces file size while allowing the original data to be reconstructed exactly.", level:"AS", topic:"Data Representation"},
  {term:"Lossy compression", cn:"有损压缩", cn_def:"永久丢弃部分数据、无法完全还原的压缩方式", definition:"Compression that reduces file size by permanently removing some data, so the original cannot be exactly restored.", level:"AS", topic:"Data Representation"},

  /* ---------- Data Quality & Databases (AS) ---------- */
  {term:"Validation", cn:"数据合理性检查/验证", cn_def:"自动检查输入数据是否合理、类型格式范围是否正确", definition:"An automated check that data entered is reasonable and of the correct type, format or range, though not necessarily correct.", example:"A range check is one form of Validation on an age field.", level:"AS", topic:"Databases"},
  {term:"Verification", cn:"数据核对/校验", cn_def:"检查数据是否被准确录入或复制、与原件一致", definition:"A check that data has been copied or entered accurately, matching the original source.", example:"Double entry of a password is a form of Verification.", level:"AS", topic:"Databases"},
  {term:"Primary key", cn:"主键", cn_def:"能唯一标识表中每条记录的字段（或字段组）", definition:"An attribute (or set of attributes) that uniquely identifies each record in a table.", level:"AS", topic:"Databases"},
  {term:"Foreign key", cn:"外键", cn_def:"指向另一表主键的字段，用来关联两张表", definition:"An attribute in one table that refers to the primary key of another table, linking the two tables.", level:"AS", topic:"Databases"},
  {term:"Normalisation", cn:"规范化", cn_def:"整理数据库数据以减少冗余、避免数据不一致", definition:"The process of organising data in a database to reduce redundancy and avoid data inconsistency.", level:"AS", topic:"Databases"},
  {term:"Record", cn:"记录（行）", cn_def:"数据库表中的一行，存放某个实体的全部数据", definition:"A single row in a database table, holding all the data about one entity instance.", level:"AS", topic:"Databases"},
  {term:"Field", cn:"字段（列）", cn_def:"记录中的一列，存放一个属性的单项数据", definition:"A single item of data (a column) within a record, holding one attribute.", level:"AS", topic:"Databases"},
  {term:"Relational database", cn:"关系型数据库", cn_def:"用带键关联的多张表来存储数据的数据库", definition:"A database that stores data in linked tables, with relationships defined using keys.", level:"AS", topic:"Databases"},
  {term:"DBMS", cn:"数据库管理系统", cn_def:"创建、管理并控制数据库访问的软件", definition:"Database Management System: software that creates, manages and controls access to a database.", level:"AS", topic:"Databases"},
  {term:"Referential integrity", cn:"参照完整性", cn_def:"保证外键值必须对应已有主键或为空的规则", definition:"The rule that a foreign key value must match an existing primary key value or be null, keeping links between tables valid.", level:"AS", topic:"Databases"},

  /* ---------- Networking (AS) ---------- */
  {term:"LAN", cn:"局域网", cn_def:"覆盖单一场所或建筑等小范围的网络", definition:"Local Area Network: a network covering a small geographical area such as a single site or building.", level:"AS", topic:"Networking"},
  {term:"WAN", cn:"广域网", cn_def:"覆盖大地理范围、常连接多个局域网的网络，如互联网", definition:"Wide Area Network: a network covering a large geographical area, often connecting LANs, e.g. the internet.", level:"AS", topic:"Networking"},
  {term:"Protocol", cn:"协议", cn_def:"规定设备间如何传输数据的一套规则", definition:"A set of rules that governs how data is transmitted between devices on a network.", example:"A Protocol is a set of rules governing data transmission.", level:"AS", topic:"Networking"},
  {term:"Packet", cn:"数据包", cn_def:"消息被切分后带首部和有效载荷的小数据单元", definition:"A small unit of data with a header and payload, into which a message is divided for transmission over a network.", level:"AS", topic:"Networking"},
  {term:"Packet switching", cn:"分组交换", cn_def:"把数据切成包各自发送、在目的地重组的传输方式", definition:"A method of transmitting data by breaking it into packets that are sent independently and reassembled at the destination.", level:"AS", topic:"Networking"},
  {term:"IP address", cn:"IP 地址", cn_def:"分配给网络设备、用于标识并路由数据的数字标签", definition:"A unique numerical label assigned to each device on a network to identify it and route data to it.", level:"AS", topic:"Networking"},
  {term:"MAC address", cn:"MAC 地址/物理地址", cn_def:"由厂商写入网卡的唯一硬件地址", definition:"A unique hardware address assigned to a network interface card by the manufacturer.", level:"AS", topic:"Networking"},
  {term:"Bandwidth", cn:"带宽", cn_def:"网络连接单位时间可传输的最大数据量", definition:"The maximum rate at which data can be transferred over a network connection, often measured in bits per second.", level:"AS", topic:"Networking"},
  {term:"Router", cn:"路由器", cn_def:"在不同网络间转发数据包并选择最佳路径的设备", definition:"A device that forwards data packets between different networks, choosing the best route to the destination.", level:"AS", topic:"Networking"},
  {term:"Switch", cn:"交换机", cn_def:"依 MAC 地址把数据只转发给目标设备的局域网设备", definition:"A device that connects devices within a LAN and forwards data only to the intended recipient using MAC addresses.", level:"AS", topic:"Networking"},
  {term:"Client-server", cn:"客户端-服务器", cn_def:"客户端向中央服务器请求服务或资源的网络模型", definition:"A network model in which client devices request services or resources from a central server.", level:"AS", topic:"Networking"},
  {term:"Peer-to-peer", cn:"对等网络", cn_def:"各设备地位平等、既是客户端也是服务器的网络模型", definition:"A network model in which each device has equal status and can act as both client and server.", level:"AS", topic:"Networking"},
  {term:"TCP/IP", cn:"TCP/IP 协议栈", cn_def:"规定数据如何分包、寻址、传输并重组的一套协议栈", definition:"A stack of protocols that governs how data is packetised, addressed, transmitted and reassembled across the internet.", level:"AS", topic:"Networking"},

  /* ---------- Hardware & Architecture (AS) ---------- */
  {term:"RAM", cn:"随机存取存储器/内存", cn_def:"存放当前使用中的数据和程序、断电即丢的易失性内存", definition:"Random Access Memory: volatile primary storage that holds data and programs currently in use, losing contents when power is off.", level:"AS", topic:"Hardware"},
  {term:"ROM", cn:"只读存储器", cn_def:"内容固定、断电保留的非易失性存储器，常存启动指令", definition:"Read Only Memory: non-volatile memory whose contents are fixed and retained without power, often holding boot instructions.", level:"AS", topic:"Hardware"},
  {term:"CPU", cn:"中央处理器", cn_def:"取指、译码并执行程序指令的核心部件", definition:"Central Processing Unit: the component that fetches, decodes and executes program instructions.", level:"AS", topic:"Hardware"},
  {term:"ALU", cn:"算术逻辑单元", cn_def:"处理器中执行算术与逻辑运算的部件", definition:"Arithmetic Logic Unit: the part of the processor that carries out arithmetic and logical operations.", level:"AS", topic:"Hardware"},
  {term:"Control unit", cn:"控制单元", cn_def:"管理取指-译码-执行周期并协调各部件的处理器部件", definition:"The part of the processor that manages and coordinates the fetch-decode-execute cycle and controls other components.", level:"AS", topic:"Hardware"},
  {term:"Register", cn:"寄存器", cn_def:"处理器内部用于临时存放数据的极快小容量存储单元", definition:"A small, very fast storage location inside the processor used to hold data during processing.", level:"AS", topic:"Hardware"},
  {term:"Fetch-decode-execute cycle", cn:"取指-译码-执行周期", cn_def:"处理器反复取指、译码并执行指令的循环过程", definition:"The repeating cycle by which the processor fetches an instruction, decodes it and carries it out.", level:"AS", topic:"Hardware"},
  {term:"Bus", cn:"总线", cn_def:"在计算机各部件间传送数据、地址或控制信号的并行线路", definition:"A set of parallel wires that carries data, addresses or control signals between components of a computer.", level:"AS", topic:"Hardware"},
  {term:"Volatile", cn:"易失性", cn_def:"断电后内容即丢失的存储特性，如 RAM", definition:"Describes memory that loses its contents when power is switched off, such as RAM.", level:"AS", topic:"Hardware"},
  {term:"Cache", cn:"高速缓存", cn_def:"处理器旁的小容量快速存储，存热点数据以加速访问", definition:"A small, fast memory close to the processor that stores frequently used data to speed up access.", level:"AS", topic:"Hardware"},

  /* ---------- Logic Gates (AS) ---------- */
  {term:"Logic gate", cn:"逻辑门", cn_def:"对二进制输入做布尔运算、产生单一二进制输出的电路", definition:"An electronic circuit that performs a Boolean operation on one or more binary inputs to produce a single binary output.", level:"AS", topic:"Logic Gates"},
  {term:"AND gate", cn:"与门", cn_def:"仅当所有输入都为 1 时输出才为 1 的逻辑门", definition:"A logic gate whose output is 1 only when all of its inputs are 1.", level:"AS", topic:"Logic Gates"},
  {term:"OR gate", cn:"或门", cn_def:"至少一个输入为 1 时输出即为 1 的逻辑门", definition:"A logic gate whose output is 1 when at least one of its inputs is 1.", level:"AS", topic:"Logic Gates"},
  {term:"NOT gate", cn:"非门/反相器", cn_def:"只有一个输入、将其取反的逻辑门（反相器）", definition:"A logic gate with one input that inverts its value; also called an inverter.", level:"AS", topic:"Logic Gates"},
  {term:"NAND gate", cn:"与非门", cn_def:"仅当所有输入都为 1 时输出才为 0 的逻辑门（与门取反）", definition:"A logic gate whose output is 0 only when all inputs are 1; the inverse of AND.", level:"AS", topic:"Logic Gates"},
  {term:"NOR gate", cn:"或非门", cn_def:"仅当所有输入都为 0 时输出才为 1 的逻辑门（或门取反）", definition:"A logic gate whose output is 1 only when all inputs are 0; the inverse of OR.", level:"AS", topic:"Logic Gates"},
  {term:"XOR gate", cn:"异或门", cn_def:"两个输入不同时输出为 1 的逻辑门", definition:"A logic gate whose output is 1 when its two inputs are different.", level:"AS", topic:"Logic Gates"},
  {term:"Truth table", cn:"真值表", cn_def:"列出逻辑电路所有输入组合及其对应输出的表", definition:"A table listing every possible combination of inputs to a logic circuit and the corresponding outputs.", level:"AS", topic:"Logic Gates"},

  /* ---------- Software & Translators (AS) ---------- */
  {term:"Compiler", cn:"编译器", cn_def:"运行前把整个高级程序一次性译成机器码、生成可执行文件的翻译器", definition:"A translator that converts an entire high-level program into machine code before it is run, producing an executable.", example:"A Compiler translates the whole program before it runs.", level:"AS", topic:"Software"},
  {term:"Interpreter", cn:"解释器", cn_def:"逐条翻译并立即执行高级程序的翻译器", definition:"A translator that converts and executes a high-level program one statement at a time.", example:"An Interpreter translates and runs code one statement at a time.", level:"AS", topic:"Software"},
  {term:"Assembler", cn:"汇编器", cn_def:"把汇编语言逐行译成机器码的翻译器", definition:"A translator that converts assembly language into machine code, one line to one instruction.", level:"AS", topic:"Software"},
  {term:"Machine code", cn:"机器码", cn_def:"处理器能直接执行的二进制指令，级别最低的语言", definition:"The binary instructions that a processor can execute directly, the lowest-level language.", level:"AS", topic:"Software"},
  {term:"Assembly language", cn:"汇编语言", cn_def:"用助记符代表机器指令的低级语言", definition:"A low-level language that uses mnemonics to represent machine-code instructions.", level:"AS", topic:"Software"},
  {term:"High-level language", cn:"高级语言", cn_def:"接近人类语言、可移植且不依赖特定处理器的编程语言", definition:"A programming language close to human language, portable and independent of a particular processor.", level:"AS", topic:"Software"},
  {term:"Operating system", cn:"操作系统", cn_def:"管理硬件和资源、为应用程序提供运行平台的系统软件", definition:"System software that manages hardware, resources and provides a platform for running application programs.", level:"AS", topic:"Software"},
  {term:"Utility software", cn:"实用工具软件", cn_def:"完成备份、碎片整理、查毒等维护任务的系统软件", definition:"System software that performs maintenance tasks such as backup, defragmentation or virus scanning.", level:"AS", topic:"Software"},

  /* ---------- Algorithms & Error Detection (AS) ---------- */
  {term:"Abstraction", cn:"抽象", cn_def:"隐去无关细节、只保留问题本质特征的过程", definition:"The process of removing or hiding unnecessary detail so that only the essential features of a problem remain.", level:"AS", topic:"Algorithms"},
  {term:"Algorithm", cn:"算法", cn_def:"解决问题或完成任务的有限、有序且明确的步骤序列", definition:"A finite, ordered set of well-defined steps that solves a problem or performs a task.", example:"An Algorithm is a finite sequence of well-defined steps.", level:"AS", topic:"Algorithms"},
  {term:"Decomposition", cn:"分解", cn_def:"把复杂问题拆成若干更小、更易处理的子问题", definition:"Breaking a complex problem down into smaller, more manageable sub-problems.", level:"AS", topic:"Algorithms"},
  {term:"Pseudocode", cn:"伪代码", cn_def:"用结构化的非正式语言描述算法，不依赖具体编程语言", definition:"A way of describing an algorithm using structured, informal English rather than a specific programming language.", level:"AS", topic:"Algorithms"},
  {term:"Linear search", cn:"线性查找", cn_def:"逐个检查列表元素直到找到目标或结束的查找法", definition:"A search algorithm that checks each item in a list in turn until the target is found or the list ends.", level:"AS", topic:"Algorithms"},
  {term:"Binary search", cn:"二分查找", cn_def:"在有序表中反复取半、舍弃不含目标那半的查找法", definition:"A search algorithm that repeatedly halves a sorted list, discarding the half that cannot contain the target.", level:"AS", topic:"Algorithms"},
  {term:"Bubble sort", cn:"冒泡排序", cn_def:"反复比较并交换相邻元素直到有序的排序法", definition:"A sorting algorithm that repeatedly compares and swaps adjacent items until the list is in order.", level:"AS", topic:"Algorithms"},
  {term:"Checksum", cn:"校验和", cn_def:"由数据算出并随之发送、收到后重算以检错的校验值", definition:"A value calculated from a block of data and sent with it, recalculated on receipt to detect transmission errors.", level:"AS", topic:"Algorithms"},
  {term:"Parity bit", cn:"奇偶校验位", cn_def:"附加一位使 1 的个数为奇或偶、用于检错的位", definition:"An extra bit added to a group of bits to make the total number of 1s odd or even, used to detect errors.", level:"AS", topic:"Algorithms"},
  {term:"Check digit", cn:"校验位/校验数字", cn_def:"由数字算出并附在其后、用于检测录入错误的一位", definition:"An extra digit calculated from and appended to a number, used to detect data entry errors.", level:"AS", topic:"Algorithms"},

  /* ---------- Programming Basics (AS) ---------- */
  {term:"Variable", cn:"变量", cn_def:"有名字、运行期间取值可改变的存储位置", definition:"A named storage location whose value can change while a program runs.", level:"AS", topic:"Programming"},
  {term:"Constant", cn:"常量", cn_def:"有名字、运行期间取值固定不变的量", definition:"A named value that is fixed and cannot change while a program runs.", level:"AS", topic:"Programming"},
  {term:"Iteration", cn:"迭代/循环", cn_def:"用循环重复执行某段代码，条件成立或指定次数", definition:"The repetition of a block of code, using a loop, while a condition holds or a set number of times.", level:"AS", topic:"Programming"},
  {term:"Selection", cn:"选择/分支", cn_def:"根据条件真假决定执行哪段代码的结构", definition:"A construct that chooses which code to run based on whether a condition is true or false.", level:"AS", topic:"Programming"},
  {term:"Procedure", cn:"过程/子程序（无返回值）", cn_def:"完成任务但不返回值的具名代码块，调用后不给出结果值", definition:"A named block of code that performs a task and can be called, without returning a value.", level:"AS", topic:"Programming"},
  {term:"Function", cn:"函数（有返回值的子程序）", cn_def:"完成任务并向调用处返回一个值的具名代码块", definition:"A named block of code that performs a task and returns a single value to the point where it was called.", level:"AS", topic:"Programming"},
  {term:"Parameter", cn:"形参（形式参数）", cn_def:"子程序定义中列出、调用时接收传入值的变量", definition:"A variable listed in a subroutine's definition that receives a value when the subroutine is called.", level:"AS", topic:"Programming"},
  {term:"Array", cn:"数组", cn_def:"存放同类型、固定个数元素并按下标访问的数据结构", definition:"A data structure holding a fixed number of elements of the same data type, accessed by index.", level:"AS", topic:"Programming"},

  /* ---------- Data Representation (AS · 扩充) ---------- */
  {term:"Sign and magnitude", cn:"原码/符号-数值表示", cn_def:"最高位表符号、其余位表数值大小的有符号整数表示法", definition:"A way of representing signed integers where the most significant bit shows the sign and the remaining bits give the size of the number.", level:"AS", topic:"Data Representation"},
  {term:"Binary Coded Decimal", cn:"二进制编码十进制", cn_def:"每个十进制数字单独用 4 位二进制存储的表示法（BCD）", definition:"A representation in which each denary digit is stored separately as its own 4-bit binary pattern; abbreviated BCD.", example:"In Binary Coded Decimal the number 59 is stored as 0101 1001.", level:"AS", topic:"Data Representation"},
  {term:"Floating-point number", cn:"浮点数", cn_def:"用尾数和阶码存储的实数，可在定长位内表示大范围数值", definition:"A real number stored as a mantissa and an exponent, allowing a wide range of values to be represented in a fixed number of bits.", level:"AS", topic:"Data Representation"},
  {term:"Mantissa", cn:"尾数", cn_def:"浮点数中存放有效数字、由阶码缩放的部分", definition:"The part of a floating-point number that holds its significant digits, scaled by the exponent.", level:"AS", topic:"Data Representation"},
  {term:"Exponent", cn:"阶码/指数", cn_def:"浮点数中指明尾数按 2 的几次方缩放的部分", definition:"The part of a floating-point number that indicates the power of two by which the mantissa is scaled.", level:"AS", topic:"Data Representation"},
  {term:"Normalisation (floating-point)", cn:"浮点规格化", cn_def:"调整浮点数使尾数用满精度、得到唯一表示", definition:"Adjusting a floating-point number so the mantissa uses the maximum available precision, giving a unique representation.", level:"AS", topic:"Data Representation"},
  {term:"Character set", cn:"字符集", cn_def:"某编码方案能表示的全部字符，各对应唯一二进制码", definition:"The complete list of characters that a coding scheme can represent, each mapped to a unique binary code.", level:"AS", topic:"Data Representation"},
  {term:"Run-length encoding", cn:"游程编码", cn_def:"把连续相同值替换为一个值加计数的无损压缩法", definition:"A lossless compression method that replaces runs of identical values with a single value and a count.", example:"Run-length encoding stores AAAB as 3A1B.", level:"AS", topic:"Data Representation"},
  {term:"Pixel", cn:"像素", cn_def:"位图图像中最小的可寻址元素，存一个颜色值", definition:"The smallest addressable element of a bitmap image, holding a single colour value.", level:"AS", topic:"Data Representation"},
  {term:"Metadata", cn:"元数据", cn_def:"描述文件本身的数据，如图像宽高和色彩深度", definition:"Data stored about a file that describes it, such as image width, height and colour depth.", level:"AS", topic:"Data Representation"},
  {term:"Bit rate", cn:"比特率/码率", cn_def:"每秒处理的音频位数，等于采样率乘采样位深", definition:"The number of bits of audio processed per second, found by multiplying the sample rate by the sample resolution.", level:"AS", topic:"Data Representation"},

  /* ---------- Networking (AS · 扩充) ---------- */
  {term:"DNS", cn:"域名系统", cn_def:"把便于阅读的域名解析为数字 IP 地址的服务", definition:"Domain Name System: a service that translates human-readable domain names into their numerical IP addresses.", example:"DNS turns example.com into an IP address.", level:"AS", topic:"Networking"},
  {term:"Subnet mask", cn:"子网掩码", cn_def:"把 IP 地址划分为网络部分和主机部分的 32 位值", definition:"A 32-bit value that divides an IP address into its network and host portions.", level:"AS", topic:"Networking"},
  {term:"HTTP", cn:"超文本传输协议", cn_def:"浏览器与网站服务器间请求和传输网页所用的协议", definition:"HyperText Transfer Protocol: the protocol used to request and transfer web pages between a browser and a web server.", level:"AS", topic:"Networking"},
  {term:"HTTPS", cn:"安全超文本传输协议", cn_def:"在加密连接上运行的 HTTP，保护网站数据不被窃听", definition:"HTTP carried over an encrypted connection, so that data exchanged with a website is protected from eavesdropping.", level:"AS", topic:"Networking"},
  {term:"URL", cn:"统一资源定位符", cn_def:"标明资源协议、主机和路径的完整网址", definition:"Uniform Resource Locator: the full web address that identifies the protocol, host and path of a resource.", level:"AS", topic:"Networking"},
  {term:"Bit streaming", cn:"流式传输", cn_def:"以连续流方式传输媒体，边收边播", definition:"Transferring media in a continuous flow so it can be played while the rest is still being received.", level:"AS", topic:"Networking"},
  {term:"Latency", cn:"延迟", cn_def:"数据从发送到被接收之间的网络延迟", definition:"The delay between sending data and it being received across a network.", level:"AS", topic:"Networking"},
  {term:"Bus topology", cn:"总线型拓扑", cn_def:"所有设备连到一条共享主干电缆的网络布局", definition:"A network layout in which all devices connect to a single shared central cable called the backbone.", level:"AS", topic:"Networking"},
  {term:"Star topology", cn:"星型拓扑", cn_def:"每台设备都连到交换机等中央节点的网络布局", definition:"A network layout in which every device connects to a central node such as a switch.", level:"AS", topic:"Networking"},
  {term:"Wireless access point", cn:"无线接入点", cn_def:"通过收发无线电信号让无线设备接入有线网的设备", definition:"A device that lets wireless devices join a wired network by relaying radio signals to and from it.", level:"AS", topic:"Networking"},
  {term:"Network interface card", cn:"网络接口卡（网卡）", cn_def:"把设备接入网络并赋予唯一 MAC 地址的硬件（网卡）", definition:"Hardware that connects a device to a network and gives it a unique MAC address; abbreviated NIC.", level:"AS", topic:"Networking"},

  /* ---------- Hardware & Architecture (AS · 扩充) ---------- */
  {term:"Program counter", cn:"程序计数器", cn_def:"存放下一条待取指令地址的寄存器", definition:"A register that holds the address of the next instruction to be fetched in the fetch-decode-execute cycle.", level:"AS", topic:"Hardware"},
  {term:"Memory address register", cn:"内存地址寄存器", cn_def:"存放待访问数据或指令内存地址的寄存器（MAR）", definition:"A register that holds the address in memory of the data or instruction to be accessed; abbreviated MAR.", level:"AS", topic:"Hardware"},
  {term:"Memory data register", cn:"内存数据寄存器", cn_def:"存放正在与内存之间传输数据的寄存器（MDR）", definition:"A register that holds data being transferred to or from memory; abbreviated MDR.", level:"AS", topic:"Hardware"},
  {term:"Accumulator", cn:"累加器", cn_def:"存放算术逻辑运算中间结果的寄存器", definition:"A register that stores the intermediate results of arithmetic and logic operations in the processor.", level:"AS", topic:"Hardware"},
  {term:"Data bus", cn:"数据总线", cn_def:"在处理器、内存等部件间双向传送数据的总线", definition:"A bidirectional bus that carries data between the processor, memory and other components.", level:"AS", topic:"Hardware"},
  {term:"Address bus", cn:"地址总线", cn_def:"单向传送处理器欲访问内存地址的总线", definition:"A unidirectional bus that carries the memory address of the location the processor wishes to access.", level:"AS", topic:"Hardware"},
  {term:"Control bus", cn:"控制总线", cn_def:"传送命令和时序信号、协调各部件的总线", definition:"A bus that carries command and timing signals to coordinate the components of the computer.", level:"AS", topic:"Hardware"},
  {term:"Clock speed", cn:"时钟频率/主频", cn_def:"处理器每秒可执行的取指-译码-执行周期数，单位赫兹", definition:"The number of fetch-decode-execute cycles a processor can perform per second, measured in hertz.", level:"AS", topic:"Hardware"},
  {term:"SSD", cn:"固态硬盘", cn_def:"用闪存、无机械部件的非易失性辅助存储（固态硬盘）", definition:"Solid State Drive: non-volatile secondary storage that uses flash memory with no moving parts.", level:"AS", topic:"Hardware"},
  {term:"HDD", cn:"机械硬盘", cn_def:"在旋转盘片上磁性记录数据的非易失性辅助存储（机械硬盘）", definition:"Hard Disk Drive: non-volatile secondary storage that records data magnetically on spinning platters.", level:"AS", topic:"Hardware"},
  {term:"EEPROM", cn:"电可擦可编程只读存储器", cn_def:"可用电方式擦除和重写的非易失性存储器", definition:"Electrically Erasable Programmable Read Only Memory: non-volatile memory that can be erased and rewritten electrically.", level:"AS", topic:"Hardware"},
  {term:"Optical storage", cn:"光存储", cn_def:"用激光读写、靠凹坑与平面记录数据的辅助存储，如 CD/DVD", definition:"Secondary storage such as CD or DVD where data is read and written using a laser to detect pits and lands.", level:"AS", topic:"Hardware"},
  {term:"Embedded system", cn:"嵌入式系统", cn_def:"内置于更大设备、执行专用控制功能的计算机", definition:"A computer built into a larger device to perform a dedicated control function, such as in a washing machine.", level:"AS", topic:"Hardware"},
  {term:"Non-volatile", cn:"非易失性", cn_def:"断电后仍保留内容的存储特性，如 ROM、SSD", definition:"Describes memory that keeps its contents when the power is switched off, such as ROM or an SSD.", level:"AS", topic:"Hardware"},
  {term:"Secondary storage", cn:"辅助存储/外存", cn_def:"永久保存程序和数据、独立于主存的非易失性存储", definition:"Non-volatile storage used to keep programs and data permanently, separate from the main memory.", level:"AS", topic:"Hardware"},

  /* ---------- System Software & Ethics (AS · 扩充) ---------- */
  {term:"Device driver", cn:"设备驱动程序", cn_def:"让操作系统与某个硬件设备通信并控制它的系统软件", definition:"System software that lets the operating system communicate with and control a particular hardware device.", level:"AS", topic:"Software"},
  {term:"Linker", cn:"链接器", cn_def:"把分别编译的模块和库例程合并成单一可执行文件的程序", definition:"A program that combines separately compiled modules and library routines into a single executable.", level:"AS", topic:"Software"},
  {term:"Loader", cn:"加载器", cn_def:"把程序从存储装入内存、供处理器执行的实用程序", definition:"A utility that copies a program from storage into memory ready for the processor to execute.", level:"AS", topic:"Software"},
  {term:"Integrated development environment", cn:"集成开发环境", cn_def:"集编辑器、翻译器和调试工具于一体的开发软件（IDE）", definition:"Software that combines an editor, translator and debugging tools to help write programs; abbreviated IDE.", level:"AS", topic:"Software"},
  {term:"Cloud computing", cn:"云计算", cn_def:"通过互联网由远程服务器提供存储和处理能力", definition:"Delivering storage and processing over the internet from remote servers rather than a user's own computer.", level:"AS", topic:"Software"},
  {term:"Open source software", cn:"开源软件", cn_def:"随源代码一起发布、可自由研究修改和分享的软件", definition:"Software distributed with its source code so users may study, modify and share it freely.", level:"AS", topic:"Software"},
  {term:"Proprietary software", cn:"专有/私有软件", cn_def:"源代码保密、使用受许可限制的软件", definition:"Software whose source code is kept private and whose use is restricted by a licence.", level:"AS", topic:"Software"},
  {term:"Copyright", cn:"版权", cn_def:"保护原创作品不被擅自复制或使用的法律权利", definition:"The legal right that protects the creator of original work from it being copied or used without permission.", level:"AS", topic:"Software"},

  /* ---------- Programming & Files (AS · 扩充) ---------- */
  {term:"Data type", cn:"数据类型", cn_def:"决定变量能存何种值及可做何种操作的分类", definition:"A classification that determines the kind of value a variable can hold and the operations allowed on it.", level:"AS", topic:"Programming"},
  {term:"Boolean", cn:"布尔型", cn_def:"只能取真或假两个值的数据类型", definition:"A data type that can hold only one of two values, true or false.", level:"AS", topic:"Programming"},
  {term:"String", cn:"字符串", cn_def:"由有序字符序列构成的数据类型", definition:"A data type consisting of an ordered sequence of characters.", level:"AS", topic:"Programming"},
  {term:"Integer", cn:"整型", cn_def:"只存不带小数部分的整数的数据类型", definition:"A data type that holds a whole number with no fractional part.", level:"AS", topic:"Programming"},
  {term:"Local variable", cn:"局部变量", cn_def:"在子程序内声明、只在其运行时存在和可访问的变量", definition:"A variable declared inside a subroutine that exists and is accessible only while that subroutine runs.", level:"AS", topic:"Programming"},
  {term:"Global variable", cn:"全局变量", cn_def:"声明后可在程序任何位置访问的变量", definition:"A variable declared so that it can be accessed from anywhere in a program.", level:"AS", topic:"Programming"},
  {term:"Concatenation", cn:"字符串连接", cn_def:"把两个或多个字符串首尾相接成一个更长字符串", definition:"Joining two or more strings end to end to form a single longer string.", level:"AS", topic:"Programming"},
  {term:"Nested loop", cn:"嵌套循环", cn_def:"放在另一循环体内的循环，外层每转一次内层完整执行一遍", definition:"A loop placed inside the body of another loop, so the inner loop runs fully on each pass of the outer loop.", level:"AS", topic:"Programming"},
  {term:"Serial file", cn:"串行文件（按写入先后存放）", cn_def:"记录按写入先后依次存放、无键序的文件", definition:"A file in which records are stored one after another in the order they were added, with no key order.", level:"AS", topic:"Programming"},
  {term:"Sequential file", cn:"顺序文件（按键排序）", cn_def:"记录按某键字段有序存放、便于顺序处理的文件", definition:"A file whose records are stored in order of a key field, allowing ordered processing.", level:"AS", topic:"Programming"},
  {term:"Trace table", cn:"追踪表/跟踪表", cn_def:"手工推演算法时记录各变量取值变化的表", definition:"A table used to record the changing values of variables as an algorithm is worked through by hand.", level:"AS", topic:"Programming"},

  /* ==========================================================
     ========================  A2 级  ========================
     ========================================================== */

  /* ---------- Object-Oriented Programming (A2) ---------- */
  {term:"Encapsulation", cn:"封装", cn_def:"把数据和操作它的方法封装进类，并限制对数据的直接访问", definition:"Bundling data and the methods that operate on it within a class, and restricting direct access to the data.", example:"Encapsulation keeps attributes private and exposed only through methods.", level:"A2", topic:"OOP"},
  {term:"Inheritance", cn:"继承", cn_def:"子类获得父类的属性和方法，并可新增或重写自己的成员", definition:"A mechanism where a subclass acquires the attributes and methods of a superclass and can add or override its own.", example:"Through Inheritance a subclass reuses the code of its superclass.", level:"A2", topic:"OOP"},
  {term:"Polymorphism", cn:"多态", cn_def:"同一方法调用因对象所属类不同而表现不同的能力", definition:"The ability for a method call to behave differently depending on the object's class, such as an overridden method.", example:"Polymorphism lets the same method call behave differently per object type.", level:"A2", topic:"OOP"},
  {term:"Abstraction (OOP)", cn:"抽象（面向对象）", cn_def:"把现实实体建模为类，只暴露相关属性和方法、隐藏内部细节", definition:"Modelling a real-world entity as a class that exposes only relevant attributes and methods, hiding internal detail.", level:"A2", topic:"OOP"},
  {term:"Class", cn:"类", cn_def:"定义一类对象共有属性和方法的模板或蓝图", definition:"A template or blueprint that defines the attributes and methods shared by objects of a given type.", level:"A2", topic:"OOP"},
  {term:"Object", cn:"对象", cn_def:"类的一个实例，拥有该类所定义属性的自身取值", definition:"An instance of a class, with its own values for the attributes defined by that class.", level:"A2", topic:"OOP"},
  {term:"Method", cn:"方法", cn_def:"类中定义、作用于对象数据的子程序", definition:"A subroutine defined within a class that acts on the object's data.", level:"A2", topic:"OOP"},
  {term:"Attribute", cn:"属性", cn_def:"由类定义、描述对象某项性质的数据值", definition:"A data value that describes a property of an object, defined by its class.", level:"A2", topic:"OOP"},
  {term:"Constructor", cn:"构造函数/构造方法", cn_def:"创建对象时被调用、用于初始化其属性的特殊方法", definition:"A special method that is called when an object is created, used to initialise its attributes.", level:"A2", topic:"OOP"},
  {term:"Getter", cn:"取值方法", cn_def:"返回私有属性值、提供受控读访问的方法", definition:"A method that returns the value of a private attribute, providing controlled read access.", level:"A2", topic:"OOP"},
  {term:"Setter", cn:"赋值方法", cn_def:"修改私有属性值、提供受控写访问的方法", definition:"A method that changes the value of a private attribute, providing controlled write access.", level:"A2", topic:"OOP"},
  {term:"Superclass", cn:"父类/基类", cn_def:"被其他类继承属性和方法的类（基类/父类）", definition:"A class from which other classes inherit attributes and methods; also called a base or parent class.", level:"A2", topic:"OOP"},
  {term:"Subclass", cn:"子类/派生类", cn_def:"继承自父类、可新增或重写成员的类（派生类/子类）", definition:"A class that inherits from a superclass and may add or override members; also called a derived or child class.", level:"A2", topic:"OOP"},
  {term:"Override", cn:"重写/覆盖", cn_def:"在子类中为继承自父类的方法提供新的实现", definition:"To provide a new implementation in a subclass for a method inherited from its superclass.", level:"A2", topic:"OOP"},

  /* ---------- Data Structures (A2) ---------- */
  {term:"Abstract data type", cn:"抽象数据类型", cn_def:"由行为和操作而非实现来定义的数据类型（ADT）", definition:"A data type defined by its behaviour and operations rather than its implementation; abbreviated ADT.", level:"A2", topic:"Data Structures"},
  {term:"Stack", cn:"栈", cn_def:"后进先出（LIFO）、在同一端压入和弹出的数据结构", definition:"A last-in, first-out (LIFO) data structure where items are pushed onto and popped from the same end, the top.", example:"A Stack follows a last-in, first-out order.", level:"A2", topic:"Data Structures"},
  {term:"Queue", cn:"队列", cn_def:"先进先出（FIFO）、尾部加入、头部移出的数据结构", definition:"A first-in, first-out (FIFO) data structure where items are added at the rear and removed from the front.", example:"A Queue follows a first-in, first-out order.", level:"A2", topic:"Data Structures"},
  {term:"Linked list", cn:"链表", cn_def:"由结点组成、每个结点存数据和指向下一结点指针的动态结构", definition:"A dynamic data structure of nodes, each holding data and a pointer to the next node.", level:"A2", topic:"Data Structures"},
  {term:"Binary tree", cn:"二叉树", cn_def:"每个结点最多有左右两个子结点的层次数据结构", definition:"A hierarchical data structure in which each node has at most two children, a left and a right.", level:"A2", topic:"Data Structures"},
  {term:"Binary search tree", cn:"二叉搜索树", cn_def:"左子树值都较小、右子树值都较大的二叉树", definition:"A binary tree in which each node's left subtree holds smaller values and its right subtree larger values.", level:"A2", topic:"Data Structures"},
  {term:"Hash table", cn:"哈希表/散列表", cn_def:"用哈希函数把键映射到数组下标以存取值的数据结构", definition:"A data structure that maps keys to values using a hash function to compute an index into an array.", level:"A2", topic:"Data Structures"},
  {term:"Hash function", cn:"哈希函数/散列函数", cn_def:"把键转换为哈希表下标、力求均匀分布的算法", definition:"An algorithm that converts a key into an index in a hash table, aiming to distribute keys evenly.", level:"A2", topic:"Data Structures"},
  {term:"Collision", cn:"（哈希）冲突", cn_def:"哈希中两个不同键算出同一下标的情形", definition:"In hashing, the situation where two different keys produce the same hash table index.", level:"A2", topic:"Data Structures"},
  {term:"Pointer", cn:"指针", cn_def:"存放另一数据内存地址的变量", definition:"A variable that stores the memory address of another item of data.", level:"A2", topic:"Data Structures"},
  {term:"Node", cn:"节点", cn_def:"链式结构中存数据及一个或多个指向其他结点指针的元素", definition:"An element of a linked structure that holds data and one or more pointers to other nodes.", level:"A2", topic:"Data Structures"},
  {term:"Tuple", cn:"元组", cn_def:"有序且创建后不可更改的值的集合", definition:"An ordered, immutable collection of values that cannot be changed after it is created.", level:"A2", topic:"Data Structures"},
  {term:"Record (composite)", cn:"记录（复合类型）", cn_def:"把可不同类型的相关数据项合为一名、按字段访问的结构", definition:"A data structure grouping related items of possibly different types under one name, accessed by field.", level:"A2", topic:"Data Structures"},
  {term:"Traversal", cn:"遍历", cn_def:"按定义顺序访问树或表等结构中每个结点的过程", definition:"The process of visiting every node of a data structure such as a tree or list in a defined order.", level:"A2", topic:"Data Structures"},

  /* ---------- Algorithms & Complexity (A2) ---------- */
  {term:"Recursion", cn:"递归", cn_def:"子程序调用自身，含终止的基线情形和趋近它的步骤", definition:"A technique where a subroutine calls itself, with a base case to stop and a step moving toward it.", example:"Recursion occurs when a subroutine calls itself.", level:"A2", topic:"Algorithms"},
  {term:"Base case", cn:"基线情形/终止条件", cn_def:"递归中停止继续递归、直接返回结果的条件", definition:"The condition in a recursive routine that stops further recursion and returns a result directly.", level:"A2", topic:"Algorithms"},
  {term:"Big-O notation", cn:"大 O 表示法", cn_def:"描述算法时间或空间需求随输入规模增长方式的记号", definition:"A notation describing how an algorithm's time or space requirement grows with the size of the input.", example:"Linear search is O(n).", level:"A2", topic:"Algorithms"},
  {term:"Time complexity", cn:"时间复杂度", cn_def:"衡量算法运行时间随输入规模增长快慢的指标", definition:"A measure of how the running time of an algorithm increases as the input size grows.", level:"A2", topic:"Algorithms"},
  {term:"Space complexity", cn:"空间复杂度", cn_def:"衡量算法所需内存随输入规模增长快慢的指标", definition:"A measure of how the memory an algorithm needs increases as the input size grows.", level:"A2", topic:"Algorithms"},
  {term:"Insertion sort", cn:"插入排序", cn_def:"依次取每个元素插入到已排序部分正确位置的排序法", definition:"A sorting algorithm that builds a sorted list by taking each item and inserting it into its correct position.", level:"A2", topic:"Algorithms"},
  {term:"Merge sort", cn:"归并排序", cn_def:"分治法：拆分列表、递归排序各半再归并的排序法", definition:"A divide-and-conquer sort that splits the list, sorts each half recursively and merges the halves.", level:"A2", topic:"Algorithms"},
  {term:"Divide and conquer", cn:"分治法", cn_def:"把问题拆成子问题、分别求解再合并结果的策略", definition:"A strategy that solves a problem by breaking it into smaller subproblems, solving them, then combining results.", level:"A2", topic:"Algorithms"},

  /* ---------- Programming Paradigms (A2) ---------- */
  {term:"Paradigm", cn:"编程范式", cn_def:"编程的风格或方法，决定解决方案如何组织和表达", definition:"A style or approach to programming, defining how a solution is structured and expressed.", level:"A2", topic:"Paradigms"},
  {term:"Procedural programming", cn:"过程式编程", cn_def:"把程序组织为一串操作数据的过程和函数调用的范式", definition:"A paradigm structuring a program as a sequence of procedures and function calls that operate on data.", level:"A2", topic:"Paradigms"},
  {term:"Object-oriented programming", cn:"面向对象编程", cn_def:"围绕封装数据与方法的对象来组织程序的范式", definition:"A paradigm structuring a program around objects that combine data and the methods that act on it.", level:"A2", topic:"Paradigms"},
  {term:"Declarative programming", cn:"声明式编程", cn_def:"只声明想要什么结果、不写逐步计算过程的范式", definition:"A paradigm in which the programmer states what result is wanted rather than how to compute it step by step.", level:"A2", topic:"Paradigms"},
  {term:"Low-level programming", cn:"低级编程", cn_def:"用接近机器级的指令、直接控制硬件和内存的范式", definition:"A paradigm using instructions close to machine level, giving direct control of hardware and memory.", level:"A2", topic:"Paradigms"},

  /* ---------- Databases (A2) ---------- */
  {term:"DDL", cn:"数据定义语言", cn_def:"SQL 中用于定义和修改数据库结构的部分，如 CREATE", definition:"Data Definition Language: the part of SQL used to define and modify database structure, such as CREATE and ALTER.", level:"A2", topic:"Databases"},
  {term:"DML", cn:"数据操纵语言", cn_def:"SQL 中查询和更改数据的部分，如 SELECT 等", definition:"Data Manipulation Language: the part of SQL used to query and change data, such as SELECT, INSERT and UPDATE.", level:"A2", topic:"Databases"},
  {term:"SQL", cn:"结构化查询语言", cn_def:"用于定义、查询和操纵关系数据库的标准语言", definition:"Structured Query Language: a standard language for defining, querying and manipulating relational databases.", level:"A2", topic:"Databases"},
  {term:"First normal form", cn:"第一范式", cn_def:"无重复组、每个字段只含单一原子值的规范化级别", definition:"A table is in 1NF when it contains no repeating groups and each field holds a single atomic value.", level:"A2", topic:"Databases"},
  {term:"Second normal form", cn:"第二范式", cn_def:"已满足 1NF 且非键属性都依赖整个主键的级别", definition:"A table is in 2NF when it is in 1NF and every non-key attribute depends on the whole primary key.", level:"A2", topic:"Databases"},
  {term:"Third normal form", cn:"第三范式", cn_def:"已满足 2NF 且非键属性间无相互依赖的级别", definition:"A table is in 3NF when it is in 2NF and no non-key attribute depends on another non-key attribute.", level:"A2", topic:"Databases"},
  {term:"Transaction", cn:"事务", cn_def:"作为单一单元、要么全做要么不做的一组数据库操作", definition:"A sequence of database operations treated as a single unit that either completes fully or not at all.", level:"A2", topic:"Databases"},
  {term:"Index (database)", cn:"索引（数据库）", cn_def:"以额外存储为代价、加快按某属性查表的结构", definition:"A structure that speeds up searching a database table on a particular attribute at the cost of extra storage.", level:"A2", topic:"Databases"},

  /* ---------- Hardware & Systems (A2) ---------- */
  {term:"Interrupt", cn:"中断", cn_def:"通知处理器有事件需处理、使其暂停当前任务转去处理的信号", definition:"A signal to the processor that an event needs attention, causing it to suspend its current task and run a handler.", example:"An Interrupt signals the processor that an event needs attention.", level:"A2", topic:"Hardware"},
  {term:"Pipelining", cn:"流水线", cn_def:"让相邻指令的取指、译码、执行阶段重叠以提高吞吐的技术", definition:"A technique where the processor overlaps the fetch, decode and execute stages of successive instructions to increase throughput.", level:"A2", topic:"Hardware"},
  {term:"Interrupt service routine", cn:"中断服务程序", cn_def:"处理器响应中断而运行、之后再返回原任务的例程", definition:"A routine that the processor runs in response to an interrupt before resuming the interrupted task.", level:"A2", topic:"Hardware"},
  {term:"Virtual memory", cn:"虚拟内存", cn_def:"把部分外存当作 RAM 扩展，使超过物理内存的程序能运行", definition:"A technique using part of secondary storage as an extension of RAM so that programs larger than physical memory can run.", level:"A2", topic:"Hardware"},
  {term:"Paging", cn:"分页", cn_def:"把内存和进程分成定长页以高效管理虚拟内存", definition:"Dividing memory and processes into fixed-size pages to manage virtual memory efficiently.", level:"A2", topic:"Hardware"},
  {term:"Scheduling", cn:"调度", cn_def:"操作系统决定哪个进程获得处理器及使用多久的活动", definition:"The operating system activity of deciding which process gets the processor and for how long.", level:"A2", topic:"Hardware"},

  /* ---------- Security & Networking (A2) ---------- */
  {term:"Encryption", cn:"加密", cn_def:"用密钥把数据变成不可读形式，只有授权方能读取", definition:"The process of converting data into an unreadable form using a key, so only authorised parties can read it.", example:"Encryption scrambles data so only authorised parties can read it.", level:"A2", topic:"Security"},
  {term:"Symmetric encryption", cn:"对称加密", cn_def:"加密和解密使用同一把密钥的加密方式", definition:"Encryption using the same secret key to both encrypt and decrypt data.", level:"A2", topic:"Security"},
  {term:"Asymmetric encryption", cn:"非对称加密", cn_def:"用公钥加密、对应私钥解密（或反之）的加密方式", definition:"Encryption using a public key to encrypt and a matching private key to decrypt, or vice versa.", level:"A2", topic:"Security"},
  {term:"Digital signature", cn:"数字签名", cn_def:"附在消息上的加密摘要，确认发送者身份及消息未被篡改", definition:"An encrypted digest attached to a message that confirms the sender's identity and that the message is unaltered.", level:"A2", topic:"Security"},
  {term:"SSL/TLS", cn:"SSL/TLS 协议", cn_def:"在客户端与服务器间建立加密且经认证连接的协议", definition:"Protocols that establish an encrypted, authenticated connection between a client and server over a network.", level:"A2", topic:"Security"},
  {term:"Firewall", cn:"防火墙", cn_def:"依据安全规则监控并控制网络流量的硬件或软件", definition:"Hardware or software that monitors and controls network traffic based on a set of security rules.", level:"A2", topic:"Security"},

  /* ---------- Data Structures (A2 · 扩充) ---------- */
  {term:"Graph", cn:"图", cn_def:"由顶点和连接它们的边组成、用于建模关系（如网络）的结构", definition:"A data structure of vertices connected by edges, used to model relationships such as networks.", level:"A2", topic:"Data Structures"},
  {term:"Vertex", cn:"顶点", cn_def:"图中可由边与其他结点相连的一个结点", definition:"A node in a graph that may be connected to other nodes by edges.", level:"A2", topic:"Data Structures"},
  {term:"Edge", cn:"边", cn_def:"图中连接两个顶点的连线，可有向或带权", definition:"A connection between two vertices in a graph, which may be directed or weighted.", level:"A2", topic:"Data Structures"},
  {term:"Adjacency matrix", cn:"邻接矩阵", cn_def:"用二维数组表示图，每格标明两顶点间是否有边", definition:"A two-dimensional array representing a graph, where each cell shows whether an edge links two vertices.", level:"A2", topic:"Data Structures"},
  {term:"Adjacency list", cn:"邻接表", cn_def:"每个顶点存一份与其直接相连顶点列表的图表示法", definition:"A representation of a graph in which each vertex stores a list of the vertices it is directly connected to.", level:"A2", topic:"Data Structures"},
  {term:"Circular queue", cn:"循环队列", cn_def:"在定长数组中首尾环绕、复用空位的队列", definition:"A queue implemented in a fixed array whose front and rear wrap around to reuse freed space.", level:"A2", topic:"Data Structures"},
  {term:"Priority queue", cn:"优先队列", cn_def:"每项带优先级、优先级最高者先出的队列", definition:"A queue in which each item has a priority and the highest-priority item is removed first.", level:"A2", topic:"Data Structures"},
  {term:"Dynamic data structure", cn:"动态数据结构", cn_def:"运行时可随增删而增大或缩小的结构，如链表", definition:"A data structure that can grow or shrink at run time as items are added or removed, such as a linked list.", level:"A2", topic:"Data Structures"},
  {term:"Static data structure", cn:"静态数据结构", cn_def:"编译时定死大小的结构，如数组", definition:"A data structure with a fixed size decided at compile time, such as an array.", level:"A2", topic:"Data Structures"},
  {term:"Chaining", cn:"链地址法/链接法", cn_def:"用同一下标处的链表存放冲突项来解决哈希冲突的方法", definition:"A method of resolving hash collisions by storing colliding items in a linked list at the same index.", level:"A2", topic:"Data Structures"},
  {term:"Root node", cn:"根节点", cn_def:"树顶端唯一、没有父结点的结点", definition:"The single node at the top of a tree that has no parent.", level:"A2", topic:"Data Structures"},
  {term:"Leaf node", cn:"叶节点", cn_def:"树中没有子结点的结点", definition:"A node in a tree that has no children.", level:"A2", topic:"Data Structures"},
  {term:"In-order traversal", cn:"中序遍历", cn_def:"先访左子树、再访本结点、后访右子树，对 BST 给出有序输出", definition:"A tree traversal that visits the left subtree, then the node, then the right subtree, giving sorted output for a BST.", level:"A2", topic:"Data Structures"},
  {term:"Free list", cn:"空闲链表", cn_def:"记录可供分配的空闲结点、供动态结构新增时取用的表", definition:"A list of unused nodes available to be allocated when new items are added to a dynamic structure.", level:"A2", topic:"Data Structures"},

  /* ---------- Algorithms & Complexity (A2 · 扩充) ---------- */
  {term:"Constant time", cn:"常数时间", cn_def:"运行时间不随输入规模变化的算法，记作 O(1)", definition:"Describes an algorithm whose running time does not change with input size, written as O(1).", level:"A2", topic:"Algorithms"},
  {term:"Linear time", cn:"线性时间", cn_def:"运行时间与输入规模成正比增长的算法，记作 O(n)", definition:"Describes an algorithm whose running time grows in direct proportion to the input size, written as O(n).", level:"A2", topic:"Algorithms"},
  {term:"Logarithmic time", cn:"对数时间", cn_def:"运行时间随输入规模的对数增长的算法，记作 O(log n)", definition:"Describes an algorithm whose running time grows with the logarithm of the input size, written as O(log n).", example:"Binary search runs in logarithmic time.", level:"A2", topic:"Algorithms"},
  {term:"Quadratic time", cn:"平方时间", cn_def:"运行时间随输入规模平方增长的算法，记作 O(n^2)", definition:"Describes an algorithm whose running time grows with the square of the input size, written as O(n^2).", level:"A2", topic:"Algorithms"},
  {term:"Depth-first search", cn:"深度优先搜索", cn_def:"沿每条分支尽量深入再回溯的图遍历，常用栈", definition:"A graph traversal that explores as far as possible along each branch before backtracking, often using a stack.", level:"A2", topic:"Algorithms"},
  {term:"Breadth-first search", cn:"广度优先搜索", cn_def:"先访完一结点所有邻居再进下一层的图遍历，用队列", definition:"A graph traversal that visits all neighbours of a node before moving to the next level, using a queue.", level:"A2", topic:"Algorithms"},
  {term:"Stack frame", cn:"栈帧", cn_def:"调用栈上为每个活动子程序存放其参数和返回地址的数据块", definition:"The block of data placed on the call stack for each active subroutine, holding its parameters and return address.", level:"A2", topic:"Algorithms"},
  {term:"Call stack", cn:"调用栈", cn_def:"存放当前运行中各子程序返回地址和局部数据的内存区", definition:"The area of memory that stores the return addresses and local data of subroutines that are currently running.", level:"A2", topic:"Algorithms"},

  /* ---------- Compilation & Language Processing (A2) ---------- */
  {term:"Lexical analysis", cn:"词法分析", cn_def:"编译第一阶段：把源字符组成词法单元并去掉空格和注释", definition:"The first stage of compilation, which groups source characters into tokens and removes spaces and comments.", level:"A2", topic:"Compilation"},
  {term:"Syntax analysis", cn:"语法分析", cn_def:"编译阶段：检查词法单元是否合语法并构建解析结构", definition:"The compilation stage that checks tokens follow the grammar of the language and builds a parse structure.", level:"A2", topic:"Compilation"},
  {term:"Code generation", cn:"代码生成", cn_def:"编译阶段：由已分析的程序产生目标码或机器码", definition:"The compilation stage that produces object or machine code from the analysed program.", level:"A2", topic:"Compilation"},
  {term:"Code optimisation", cn:"代码优化", cn_def:"编译阶段：改进生成的代码使其更快或更省内存", definition:"The compilation stage that improves generated code so it runs faster or uses less memory.", level:"A2", topic:"Compilation"},
  {term:"Token", cn:"词法单元/记号", cn_def:"词法分析产生的单个有意义单元，如关键字或运算符", definition:"A single meaningful unit, such as a keyword or operator, produced during lexical analysis.", level:"A2", topic:"Compilation"},
  {term:"Symbol table", cn:"符号表", cn_def:"编译时建立、记录标识符及其类型和地址的结构", definition:"A structure built during compilation that records identifiers together with their type and address.", level:"A2", topic:"Compilation"},
  {term:"Backus-Naur Form", cn:"巴科斯-诺尔范式", cn_def:"用规则描述编程语言语法的形式化记号（BNF）", definition:"A formal notation using rules to describe the grammar of a programming language; abbreviated BNF.", level:"A2", topic:"Compilation"},
  {term:"Syntax diagram", cn:"语法图", cn_def:"用图形展示语言合法语法的方式，是 BNF 的替代", definition:"A graphical way of showing the valid syntax of a language as an alternative to Backus-Naur Form.", level:"A2", topic:"Compilation"},
  {term:"Reverse Polish notation", cn:"逆波兰表示法/后缀表示法", cn_def:"把运算符写在操作数之后、无需括号的表达式写法", definition:"A way of writing expressions with the operator after its operands, removing the need for brackets.", example:"3 4 + is Reverse Polish notation for 3 + 4.", level:"A2", topic:"Compilation"},

  /* ---------- Operating Systems & Processes (A2) ---------- */
  {term:"Process", cn:"进程", cn_def:"正在执行的程序，连同操作系统分配给它的资源和状态", definition:"A program in execution, together with the resources and state the operating system allocates to it.", level:"A2", topic:"Hardware"},
  {term:"Thread", cn:"线程", cn_def:"进程内一条执行序列，可与共享其内存的其他线程并行", definition:"A single sequence of execution within a process that can run alongside other threads sharing its memory.", level:"A2", topic:"Hardware"},
  {term:"Deadlock", cn:"死锁", cn_def:"两个以上进程各自等待对方持有的资源、都无法继续的情形", definition:"A situation where two or more processes are each waiting for a resource the other holds, so none can proceed.", example:"A Deadlock leaves processes waiting on each other forever.", level:"A2", topic:"Hardware"},
  {term:"Semaphore", cn:"信号量", cn_def:"通过标示资源空闲或占用来控制共享资源访问的变量", definition:"A variable used to control access to a shared resource by signalling whether it is free or in use.", level:"A2", topic:"Hardware"},
  {term:"Mutual exclusion", cn:"互斥", cn_def:"确保同一时刻只有一个进程使用共享资源以防冲突", definition:"Ensuring that only one process at a time can use a shared resource, to prevent conflicts.", level:"A2", topic:"Hardware"},
  {term:"Round robin", cn:"时间片轮转", cn_def:"轮流给每个进程固定时间片使用处理器的调度法", definition:"A scheduling method that gives each process a fixed time slice of the processor in turn.", level:"A2", topic:"Hardware"},
  {term:"Page fault", cn:"缺页", cn_def:"程序访问一个当前不在主存中的页时引发的事件", definition:"An event raised when a program accesses a page that is not currently in main memory.", level:"A2", topic:"Hardware"},
  {term:"Thrashing", cn:"抖动/颠簸", cn_def:"过度换页使处理器换页时间多于有用工作的现象", definition:"Excessive paging that leaves the processor spending more time swapping pages than doing useful work.", level:"A2", topic:"Hardware"},
  {term:"Kernel", cn:"内核", cn_def:"操作系统核心，管理内存、进程和硬件访问", definition:"The core part of an operating system that manages memory, processes and hardware access.", level:"A2", topic:"Hardware"},
  {term:"Garbage collection", cn:"垃圾回收", cn_def:"自动回收程序不再引用的内存、供再次使用", definition:"Automatic reclaiming of memory that is no longer referenced by a program, freeing it for reuse.", level:"A2", topic:"Hardware"},

  /* ---------- Databases (A2 · 扩充) ---------- */
  {term:"Boyce-Codd normal form", cn:"BC 范式", cn_def:"比 3NF 更严、每个函数依赖的决定因素都是候选键", definition:"A stricter form of 3NF in which every determinant of a functional dependency is a candidate key; abbreviated BCNF.", level:"A2", topic:"Databases"},
  {term:"Atomicity", cn:"原子性", cn_def:"ACID 属性：事务全做或全不做，绝不留下部分改动", definition:"The ACID property that a transaction is all-or-nothing, so partial changes are never left in the database.", level:"A2", topic:"Databases"},
  {term:"Consistency (ACID)", cn:"一致性（ACID）", cn_def:"ACID 属性：事务使数据库从一个有效状态转到另一有效状态", definition:"The ACID property that a transaction moves the database from one valid state to another, keeping all rules satisfied.", level:"A2", topic:"Databases"},
  {term:"Isolation", cn:"隔离性", cn_def:"ACID 属性：并发事务互不干扰，结果如同依次执行", definition:"The ACID property that concurrent transactions do not interfere, giving the same result as if run one after another.", level:"A2", topic:"Databases"},
  {term:"Durability", cn:"持久性", cn_def:"ACID 属性：事务一旦提交，其改动即使日后系统故障也保留", definition:"The ACID property that once a transaction is committed its changes survive even a later system failure.", level:"A2", topic:"Databases"},
  {term:"Record locking", cn:"记录锁定", cn_def:"更新时锁定记录，防止多用户同时修改同一记录", definition:"Preventing more than one user from changing the same record at once by locking it during an update.", level:"A2", topic:"Databases"},
  {term:"Candidate key", cn:"候选键", cn_def:"能唯一标识每条记录、可充当主键的属性或属性组", definition:"An attribute or set of attributes that could serve as the primary key because it uniquely identifies each record.", level:"A2", topic:"Databases"},
  {term:"Secondary key", cn:"辅助键/次键", cn_def:"用于检索或排序、并非主键的属性", definition:"An attribute used to search or sort records that is not the primary key of the table.", level:"A2", topic:"Databases"},

  /* ---------- Security & AI (A2 · 扩充) ---------- */
  {term:"Public key", cn:"公钥", cn_def:"非对称加密中公开的密钥，用于加密数据或验证签名", definition:"The freely shared key in asymmetric encryption, used to encrypt data or verify a signature.", level:"A2", topic:"Security"},
  {term:"Private key", cn:"私钥", cn_def:"非对称加密中所有者保密的密钥，用于解密或生成签名", definition:"The secret key in asymmetric encryption, kept by its owner to decrypt data or create a signature.", level:"A2", topic:"Security"},
  {term:"Digital certificate", cn:"数字证书", cn_def:"可信机构签发、把公钥与其所有者身份绑定的电子文件", definition:"An electronic document issued by a trusted authority that binds a public key to the identity of its owner.", level:"A2", topic:"Security"},
  {term:"Hashing", cn:"哈希/散列", cn_def:"对数据施加单向函数生成定长摘要，用于校验完整性或存密码", definition:"Applying a one-way function to data to produce a fixed-length digest, used to check integrity or store passwords.", level:"A2", topic:"Security"},
  {term:"Denial of service", cn:"拒绝服务攻击", cn_def:"用大量请求淹没系统、使其无法服务正常用户的攻击", definition:"An attack that floods a system with requests so that it cannot serve its legitimate users.", level:"A2", topic:"Security"},
  {term:"Machine learning", cn:"机器学习", cn_def:"人工智能的一支，系统通过从数据中学习来提升任务表现", definition:"A branch of artificial intelligence in which a system improves its performance on a task by learning from data.", level:"A2", topic:"AI"},
  {term:"Artificial neural network", cn:"人工神经网络", cn_def:"由分层互连结点组成、靠调整结点间权重学习模式的模型", definition:"A model made of interconnected nodes in layers that learns patterns by adjusting the weights between them.", level:"A2", topic:"AI"},
  {term:"Backpropagation", cn:"反向传播", cn_def:"依据输出误差调整权重来训练神经网络的算法", definition:"An algorithm that trains a neural network by adjusting weights based on the error of its output.", level:"A2", topic:"AI"},
  {term:"Supervised learning", cn:"监督学习", cn_def:"用已标注正确答案的数据来训练模型的机器学习", definition:"Machine learning that trains a model on data already labelled with the correct answers.", level:"A2", topic:"AI"},
  {term:"Unsupervised learning", cn:"无监督学习", cn_def:"在无标注数据中发现模式或分组的机器学习", definition:"Machine learning that finds patterns or groupings in data that has no labels.", level:"A2", topic:"AI"},
];

/* 主题清单：AS 与 A2 各自出现过的 topic（保持出现顺序、去重） */
const CS_TOPICS = (function () {
  const as = [], a2 = [], sawA = {}, sawB = {};
  for (const w of CS_WORDS) {
    if (w.level === 'AS' && !sawA[w.topic]) { sawA[w.topic] = 1; as.push(w.topic); }
    if (w.level === 'A2' && !sawB[w.topic]) { sawB[w.topic] = 1; a2.push(w.topic); }
  }
  return { AS: as, A2: a2 };
})();

if (typeof window !== 'undefined') { window.CS_WORDS = CS_WORDS; window.CS_TOPICS = CS_TOPICS; }
