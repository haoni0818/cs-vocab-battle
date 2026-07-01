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
  {term:"Binary", cn:"二进制", definition:"A number system using only two digits, 0 and 1 (base 2), used internally by all digital computers.", example:"1011 in binary is 11 in denary.", level:"AS", topic:"Data Representation"},
  {term:"Denary", cn:"十进制", definition:"The base-10 number system using digits 0 to 9, the everyday counting system.", level:"AS", topic:"Data Representation"},
  {term:"Hexadecimal", cn:"十六进制", definition:"A base-16 number system using digits 0-9 and letters A-F, used as a shorthand for binary.", example:"Each Hexadecimal digit represents exactly 4 bits.", level:"AS", topic:"Data Representation"},
  {term:"Bit", cn:"位/比特", definition:"A binary digit, either 0 or 1; the smallest unit of data in a computer.", level:"AS", topic:"Data Representation"},
  {term:"Byte", cn:"字节", definition:"A group of 8 bits, the basic addressable unit of memory.", level:"AS", topic:"Data Representation"},
  {term:"Nibble", cn:"半字节", definition:"A group of 4 bits, equal to half a byte and one hexadecimal digit.", level:"AS", topic:"Data Representation"},
  {term:"ASCII", cn:"ASCII 编码", definition:"A character-encoding standard using 7 bits to represent 128 characters, mainly English letters, digits and control codes.", level:"AS", topic:"Data Representation"},
  {term:"Unicode", cn:"统一码", definition:"A character-encoding standard that assigns a unique code to every character in most writing systems, allowing far more characters than ASCII.", example:"Unicode can represent characters from almost every writing system.", level:"AS", topic:"Data Representation"},
  {term:"Two's complement", cn:"补码", definition:"A method of representing signed integers in binary, where the most significant bit has a negative place value.", level:"AS", topic:"Data Representation"},
  {term:"Overflow", cn:"溢出", definition:"An error that occurs when the result of a calculation is too large to be stored in the available number of bits.", level:"AS", topic:"Data Representation"},
  {term:"Bitmap image", cn:"位图图像", definition:"An image stored as a grid of pixels, each pixel having a colour value.", level:"AS", topic:"Data Representation"},
  {term:"Resolution", cn:"分辨率", definition:"The number of pixels in an image, often given as width x height.", level:"AS", topic:"Data Representation"},
  {term:"Colour depth", cn:"色彩深度", definition:"The number of bits used to represent the colour of a single pixel.", example:"8 bits per pixel gives 256 colours.", level:"AS", topic:"Data Representation"},
  {term:"Sample rate", cn:"采样率", definition:"The number of samples of a sound taken per second when recording digital audio, measured in hertz.", level:"AS", topic:"Data Representation"},
  {term:"Sample resolution", cn:"采样分辨率/位深", definition:"The number of bits used to store each sound sample; more bits give a more accurate recording.", level:"AS", topic:"Data Representation"},
  {term:"Lossless compression", cn:"无损压缩", definition:"Compression that reduces file size while allowing the original data to be reconstructed exactly.", level:"AS", topic:"Data Representation"},
  {term:"Lossy compression", cn:"有损压缩", definition:"Compression that reduces file size by permanently removing some data, so the original cannot be exactly restored.", level:"AS", topic:"Data Representation"},

  /* ---------- Data Quality & Databases (AS) ---------- */
  {term:"Validation", cn:"数据合理性检查/验证", definition:"An automated check that data entered is reasonable and of the correct type, format or range, though not necessarily correct.", example:"A range check is one form of Validation on an age field.", level:"AS", topic:"Databases"},
  {term:"Verification", cn:"数据核对/校验", definition:"A check that data has been copied or entered accurately, matching the original source.", example:"Double entry of a password is a form of Verification.", level:"AS", topic:"Databases"},
  {term:"Primary key", cn:"主键", definition:"An attribute (or set of attributes) that uniquely identifies each record in a table.", level:"AS", topic:"Databases"},
  {term:"Foreign key", cn:"外键", definition:"An attribute in one table that refers to the primary key of another table, linking the two tables.", level:"AS", topic:"Databases"},
  {term:"Normalisation", cn:"规范化", definition:"The process of organising data in a database to reduce redundancy and avoid data inconsistency.", level:"AS", topic:"Databases"},
  {term:"Record", cn:"记录（行）", definition:"A single row in a database table, holding all the data about one entity instance.", level:"AS", topic:"Databases"},
  {term:"Field", cn:"字段（列）", definition:"A single item of data (a column) within a record, holding one attribute.", level:"AS", topic:"Databases"},
  {term:"Relational database", cn:"关系型数据库", definition:"A database that stores data in linked tables, with relationships defined using keys.", level:"AS", topic:"Databases"},
  {term:"DBMS", cn:"数据库管理系统", definition:"Database Management System: software that creates, manages and controls access to a database.", level:"AS", topic:"Databases"},
  {term:"Referential integrity", cn:"参照完整性", definition:"The rule that a foreign key value must match an existing primary key value or be null, keeping links between tables valid.", level:"AS", topic:"Databases"},

  /* ---------- Networking (AS) ---------- */
  {term:"LAN", cn:"局域网", definition:"Local Area Network: a network covering a small geographical area such as a single site or building.", level:"AS", topic:"Networking"},
  {term:"WAN", cn:"广域网", definition:"Wide Area Network: a network covering a large geographical area, often connecting LANs, e.g. the internet.", level:"AS", topic:"Networking"},
  {term:"Protocol", cn:"协议", definition:"A set of rules that governs how data is transmitted between devices on a network.", example:"A Protocol is a set of rules governing data transmission.", level:"AS", topic:"Networking"},
  {term:"Packet", cn:"数据包", definition:"A small unit of data with a header and payload, into which a message is divided for transmission over a network.", level:"AS", topic:"Networking"},
  {term:"Packet switching", cn:"分组交换", definition:"A method of transmitting data by breaking it into packets that are sent independently and reassembled at the destination.", level:"AS", topic:"Networking"},
  {term:"IP address", cn:"IP 地址", definition:"A unique numerical label assigned to each device on a network to identify it and route data to it.", level:"AS", topic:"Networking"},
  {term:"MAC address", cn:"MAC 地址/物理地址", definition:"A unique hardware address assigned to a network interface card by the manufacturer.", level:"AS", topic:"Networking"},
  {term:"Bandwidth", cn:"带宽", definition:"The maximum rate at which data can be transferred over a network connection, often measured in bits per second.", level:"AS", topic:"Networking"},
  {term:"Router", cn:"路由器", definition:"A device that forwards data packets between different networks, choosing the best route to the destination.", level:"AS", topic:"Networking"},
  {term:"Switch", cn:"交换机", definition:"A device that connects devices within a LAN and forwards data only to the intended recipient using MAC addresses.", level:"AS", topic:"Networking"},
  {term:"Client-server", cn:"客户端-服务器", definition:"A network model in which client devices request services or resources from a central server.", level:"AS", topic:"Networking"},
  {term:"Peer-to-peer", cn:"对等网络", definition:"A network model in which each device has equal status and can act as both client and server.", level:"AS", topic:"Networking"},
  {term:"TCP/IP", cn:"TCP/IP 协议栈", definition:"A stack of protocols that governs how data is packetised, addressed, transmitted and reassembled across the internet.", level:"AS", topic:"Networking"},

  /* ---------- Hardware & Architecture (AS) ---------- */
  {term:"RAM", cn:"随机存取存储器/内存", definition:"Random Access Memory: volatile primary storage that holds data and programs currently in use, losing contents when power is off.", level:"AS", topic:"Hardware"},
  {term:"ROM", cn:"只读存储器", definition:"Read Only Memory: non-volatile memory whose contents are fixed and retained without power, often holding boot instructions.", level:"AS", topic:"Hardware"},
  {term:"CPU", cn:"中央处理器", definition:"Central Processing Unit: the component that fetches, decodes and executes program instructions.", level:"AS", topic:"Hardware"},
  {term:"ALU", cn:"算术逻辑单元", definition:"Arithmetic Logic Unit: the part of the processor that carries out arithmetic and logical operations.", level:"AS", topic:"Hardware"},
  {term:"Control unit", cn:"控制单元", definition:"The part of the processor that manages and coordinates the fetch-decode-execute cycle and controls other components.", level:"AS", topic:"Hardware"},
  {term:"Register", cn:"寄存器", definition:"A small, very fast storage location inside the processor used to hold data during processing.", level:"AS", topic:"Hardware"},
  {term:"Fetch-decode-execute cycle", cn:"取指-译码-执行周期", definition:"The repeating cycle by which the processor fetches an instruction, decodes it and carries it out.", level:"AS", topic:"Hardware"},
  {term:"Bus", cn:"总线", definition:"A set of parallel wires that carries data, addresses or control signals between components of a computer.", level:"AS", topic:"Hardware"},
  {term:"Volatile", cn:"易失性", definition:"Describes memory that loses its contents when power is switched off, such as RAM.", level:"AS", topic:"Hardware"},
  {term:"Cache", cn:"高速缓存", definition:"A small, fast memory close to the processor that stores frequently used data to speed up access.", level:"AS", topic:"Hardware"},

  /* ---------- Logic Gates (AS) ---------- */
  {term:"Logic gate", cn:"逻辑门", definition:"An electronic circuit that performs a Boolean operation on one or more binary inputs to produce a single binary output.", level:"AS", topic:"Logic Gates"},
  {term:"AND gate", cn:"与门", definition:"A logic gate whose output is 1 only when all of its inputs are 1.", level:"AS", topic:"Logic Gates"},
  {term:"OR gate", cn:"或门", definition:"A logic gate whose output is 1 when at least one of its inputs is 1.", level:"AS", topic:"Logic Gates"},
  {term:"NOT gate", cn:"非门/反相器", definition:"A logic gate with one input that inverts its value; also called an inverter.", level:"AS", topic:"Logic Gates"},
  {term:"NAND gate", cn:"与非门", definition:"A logic gate whose output is 0 only when all inputs are 1; the inverse of AND.", level:"AS", topic:"Logic Gates"},
  {term:"NOR gate", cn:"或非门", definition:"A logic gate whose output is 1 only when all inputs are 0; the inverse of OR.", level:"AS", topic:"Logic Gates"},
  {term:"XOR gate", cn:"异或门", definition:"A logic gate whose output is 1 when its two inputs are different.", level:"AS", topic:"Logic Gates"},
  {term:"Truth table", cn:"真值表", definition:"A table listing every possible combination of inputs to a logic circuit and the corresponding outputs.", level:"AS", topic:"Logic Gates"},

  /* ---------- Software & Translators (AS) ---------- */
  {term:"Compiler", cn:"编译器", definition:"A translator that converts an entire high-level program into machine code before it is run, producing an executable.", example:"A Compiler translates the whole program before it runs.", level:"AS", topic:"Software"},
  {term:"Interpreter", cn:"解释器", definition:"A translator that converts and executes a high-level program one statement at a time.", example:"An Interpreter translates and runs code one statement at a time.", level:"AS", topic:"Software"},
  {term:"Assembler", cn:"汇编器", definition:"A translator that converts assembly language into machine code, one line to one instruction.", level:"AS", topic:"Software"},
  {term:"Machine code", cn:"机器码", definition:"The binary instructions that a processor can execute directly, the lowest-level language.", level:"AS", topic:"Software"},
  {term:"Assembly language", cn:"汇编语言", definition:"A low-level language that uses mnemonics to represent machine-code instructions.", level:"AS", topic:"Software"},
  {term:"High-level language", cn:"高级语言", definition:"A programming language close to human language, portable and independent of a particular processor.", level:"AS", topic:"Software"},
  {term:"Operating system", cn:"操作系统", definition:"System software that manages hardware, resources and provides a platform for running application programs.", level:"AS", topic:"Software"},
  {term:"Utility software", cn:"实用工具软件", definition:"System software that performs maintenance tasks such as backup, defragmentation or virus scanning.", level:"AS", topic:"Software"},

  /* ---------- Algorithms & Error Detection (AS) ---------- */
  {term:"Abstraction", cn:"抽象", definition:"The process of removing or hiding unnecessary detail so that only the essential features of a problem remain.", level:"AS", topic:"Algorithms"},
  {term:"Algorithm", cn:"算法", definition:"A finite, ordered set of well-defined steps that solves a problem or performs a task.", example:"An Algorithm is a finite sequence of well-defined steps.", level:"AS", topic:"Algorithms"},
  {term:"Decomposition", cn:"分解", definition:"Breaking a complex problem down into smaller, more manageable sub-problems.", level:"AS", topic:"Algorithms"},
  {term:"Pseudocode", cn:"伪代码", definition:"A way of describing an algorithm using structured, informal English rather than a specific programming language.", level:"AS", topic:"Algorithms"},
  {term:"Linear search", cn:"线性查找", definition:"A search algorithm that checks each item in a list in turn until the target is found or the list ends.", level:"AS", topic:"Algorithms"},
  {term:"Binary search", cn:"二分查找", definition:"A search algorithm that repeatedly halves a sorted list, discarding the half that cannot contain the target.", level:"AS", topic:"Algorithms"},
  {term:"Bubble sort", cn:"冒泡排序", definition:"A sorting algorithm that repeatedly compares and swaps adjacent items until the list is in order.", level:"AS", topic:"Algorithms"},
  {term:"Checksum", cn:"校验和", definition:"A value calculated from a block of data and sent with it, recalculated on receipt to detect transmission errors.", level:"AS", topic:"Algorithms"},
  {term:"Parity bit", cn:"奇偶校验位", definition:"An extra bit added to a group of bits to make the total number of 1s odd or even, used to detect errors.", level:"AS", topic:"Algorithms"},
  {term:"Check digit", cn:"校验位/校验数字", definition:"An extra digit calculated from and appended to a number, used to detect data entry errors.", level:"AS", topic:"Algorithms"},

  /* ---------- Programming Basics (AS) ---------- */
  {term:"Variable", cn:"变量", definition:"A named storage location whose value can change while a program runs.", level:"AS", topic:"Programming"},
  {term:"Constant", cn:"常量", definition:"A named value that is fixed and cannot change while a program runs.", level:"AS", topic:"Programming"},
  {term:"Iteration", cn:"迭代/循环", definition:"The repetition of a block of code, using a loop, while a condition holds or a set number of times.", level:"AS", topic:"Programming"},
  {term:"Selection", cn:"选择/分支", definition:"A construct that chooses which code to run based on whether a condition is true or false.", level:"AS", topic:"Programming"},
  {term:"Procedure", cn:"过程", definition:"A named block of code that performs a task and can be called, without returning a value.", level:"AS", topic:"Programming"},
  {term:"Function", cn:"函数", definition:"A named block of code that performs a task and returns a single value to the point where it was called.", level:"AS", topic:"Programming"},
  {term:"Parameter", cn:"参数（形参）", definition:"A variable listed in a subroutine's definition that receives a value when the subroutine is called.", level:"AS", topic:"Programming"},
  {term:"Array", cn:"数组", definition:"A data structure holding a fixed number of elements of the same data type, accessed by index.", level:"AS", topic:"Programming"},

  /* ---------- Data Representation (AS · 扩充) ---------- */
  {term:"Sign and magnitude", cn:"原码/符号-数值表示", definition:"A way of representing signed integers where the most significant bit shows the sign and the remaining bits give the size of the number.", level:"AS", topic:"Data Representation"},
  {term:"Binary Coded Decimal", cn:"二进制编码十进制", definition:"A representation in which each denary digit is stored separately as its own 4-bit binary pattern; abbreviated BCD.", example:"In Binary Coded Decimal the number 59 is stored as 0101 1001.", level:"AS", topic:"Data Representation"},
  {term:"Floating-point number", cn:"浮点数", definition:"A real number stored as a mantissa and an exponent, allowing a wide range of values to be represented in a fixed number of bits.", level:"AS", topic:"Data Representation"},
  {term:"Mantissa", cn:"尾数", definition:"The part of a floating-point number that holds its significant digits, scaled by the exponent.", level:"AS", topic:"Data Representation"},
  {term:"Exponent", cn:"阶码/指数", definition:"The part of a floating-point number that indicates the power of two by which the mantissa is scaled.", level:"AS", topic:"Data Representation"},
  {term:"Normalisation (floating-point)", cn:"浮点规格化", definition:"Adjusting a floating-point number so the mantissa uses the maximum available precision, giving a unique representation.", level:"AS", topic:"Data Representation"},
  {term:"Character set", cn:"字符集", definition:"The complete list of characters that a coding scheme can represent, each mapped to a unique binary code.", level:"AS", topic:"Data Representation"},
  {term:"Run-length encoding", cn:"游程编码", definition:"A lossless compression method that replaces runs of identical values with a single value and a count.", example:"Run-length encoding stores AAAB as 3A1B.", level:"AS", topic:"Data Representation"},
  {term:"Pixel", cn:"像素", definition:"The smallest addressable element of a bitmap image, holding a single colour value.", level:"AS", topic:"Data Representation"},
  {term:"Metadata", cn:"元数据", definition:"Data stored about a file that describes it, such as image width, height and colour depth.", level:"AS", topic:"Data Representation"},
  {term:"Bit rate", cn:"比特率/码率", definition:"The number of bits of audio processed per second, found by multiplying the sample rate by the sample resolution.", level:"AS", topic:"Data Representation"},

  /* ---------- Networking (AS · 扩充) ---------- */
  {term:"DNS", cn:"域名系统", definition:"Domain Name System: a service that translates human-readable domain names into their numerical IP addresses.", example:"DNS turns example.com into an IP address.", level:"AS", topic:"Networking"},
  {term:"Subnet mask", cn:"子网掩码", definition:"A 32-bit value that divides an IP address into its network and host portions.", level:"AS", topic:"Networking"},
  {term:"HTTP", cn:"超文本传输协议", definition:"HyperText Transfer Protocol: the protocol used to request and transfer web pages between a browser and a web server.", level:"AS", topic:"Networking"},
  {term:"HTTPS", cn:"安全超文本传输协议", definition:"HTTP carried over an encrypted connection, so that data exchanged with a website is protected from eavesdropping.", level:"AS", topic:"Networking"},
  {term:"URL", cn:"统一资源定位符", definition:"Uniform Resource Locator: the full web address that identifies the protocol, host and path of a resource.", level:"AS", topic:"Networking"},
  {term:"Bit streaming", cn:"流式传输", definition:"Transferring media in a continuous flow so it can be played while the rest is still being received.", level:"AS", topic:"Networking"},
  {term:"Latency", cn:"延迟", definition:"The delay between sending data and it being received across a network.", level:"AS", topic:"Networking"},
  {term:"Bus topology", cn:"总线型拓扑", definition:"A network layout in which all devices connect to a single shared central cable called the backbone.", level:"AS", topic:"Networking"},
  {term:"Star topology", cn:"星型拓扑", definition:"A network layout in which every device connects to a central node such as a switch.", level:"AS", topic:"Networking"},
  {term:"Wireless access point", cn:"无线接入点", definition:"A device that lets wireless devices join a wired network by relaying radio signals to and from it.", level:"AS", topic:"Networking"},
  {term:"Network interface card", cn:"网络接口卡（网卡）", definition:"Hardware that connects a device to a network and gives it a unique MAC address; abbreviated NIC.", level:"AS", topic:"Networking"},

  /* ---------- Hardware & Architecture (AS · 扩充) ---------- */
  {term:"Program counter", cn:"程序计数器", definition:"A register that holds the address of the next instruction to be fetched in the fetch-decode-execute cycle.", level:"AS", topic:"Hardware"},
  {term:"Memory address register", cn:"内存地址寄存器", definition:"A register that holds the address in memory of the data or instruction to be accessed; abbreviated MAR.", level:"AS", topic:"Hardware"},
  {term:"Memory data register", cn:"内存数据寄存器", definition:"A register that holds data being transferred to or from memory; abbreviated MDR.", level:"AS", topic:"Hardware"},
  {term:"Accumulator", cn:"累加器", definition:"A register that stores the intermediate results of arithmetic and logic operations in the processor.", level:"AS", topic:"Hardware"},
  {term:"Data bus", cn:"数据总线", definition:"A bidirectional bus that carries data between the processor, memory and other components.", level:"AS", topic:"Hardware"},
  {term:"Address bus", cn:"地址总线", definition:"A unidirectional bus that carries the memory address of the location the processor wishes to access.", level:"AS", topic:"Hardware"},
  {term:"Control bus", cn:"控制总线", definition:"A bus that carries command and timing signals to coordinate the components of the computer.", level:"AS", topic:"Hardware"},
  {term:"Clock speed", cn:"时钟频率/主频", definition:"The number of fetch-decode-execute cycles a processor can perform per second, measured in hertz.", level:"AS", topic:"Hardware"},
  {term:"SSD", cn:"固态硬盘", definition:"Solid State Drive: non-volatile secondary storage that uses flash memory with no moving parts.", level:"AS", topic:"Hardware"},
  {term:"HDD", cn:"机械硬盘", definition:"Hard Disk Drive: non-volatile secondary storage that records data magnetically on spinning platters.", level:"AS", topic:"Hardware"},
  {term:"EEPROM", cn:"电可擦可编程只读存储器", definition:"Electrically Erasable Programmable Read Only Memory: non-volatile memory that can be erased and rewritten electrically.", level:"AS", topic:"Hardware"},
  {term:"Optical storage", cn:"光存储", definition:"Secondary storage such as CD or DVD where data is read and written using a laser to detect pits and lands.", level:"AS", topic:"Hardware"},
  {term:"Embedded system", cn:"嵌入式系统", definition:"A computer built into a larger device to perform a dedicated control function, such as in a washing machine.", level:"AS", topic:"Hardware"},
  {term:"Non-volatile", cn:"非易失性", definition:"Describes memory that keeps its contents when the power is switched off, such as ROM or an SSD.", level:"AS", topic:"Hardware"},
  {term:"Secondary storage", cn:"辅助存储/外存", definition:"Non-volatile storage used to keep programs and data permanently, separate from the main memory.", level:"AS", topic:"Hardware"},

  /* ---------- System Software & Ethics (AS · 扩充) ---------- */
  {term:"Device driver", cn:"设备驱动程序", definition:"System software that lets the operating system communicate with and control a particular hardware device.", level:"AS", topic:"Software"},
  {term:"Linker", cn:"链接器", definition:"A program that combines separately compiled modules and library routines into a single executable.", level:"AS", topic:"Software"},
  {term:"Loader", cn:"加载器", definition:"A utility that copies a program from storage into memory ready for the processor to execute.", level:"AS", topic:"Software"},
  {term:"Integrated development environment", cn:"集成开发环境", definition:"Software that combines an editor, translator and debugging tools to help write programs; abbreviated IDE.", level:"AS", topic:"Software"},
  {term:"Cloud computing", cn:"云计算", definition:"Delivering storage and processing over the internet from remote servers rather than a user's own computer.", level:"AS", topic:"Software"},
  {term:"Open source software", cn:"开源软件", definition:"Software distributed with its source code so users may study, modify and share it freely.", level:"AS", topic:"Software"},
  {term:"Proprietary software", cn:"专有/私有软件", definition:"Software whose source code is kept private and whose use is restricted by a licence.", level:"AS", topic:"Software"},
  {term:"Copyright", cn:"版权", definition:"The legal right that protects the creator of original work from it being copied or used without permission.", level:"AS", topic:"Software"},

  /* ---------- Programming & Files (AS · 扩充) ---------- */
  {term:"Data type", cn:"数据类型", definition:"A classification that determines the kind of value a variable can hold and the operations allowed on it.", level:"AS", topic:"Programming"},
  {term:"Boolean", cn:"布尔型", definition:"A data type that can hold only one of two values, true or false.", level:"AS", topic:"Programming"},
  {term:"String", cn:"字符串", definition:"A data type consisting of an ordered sequence of characters.", level:"AS", topic:"Programming"},
  {term:"Integer", cn:"整型", definition:"A data type that holds a whole number with no fractional part.", level:"AS", topic:"Programming"},
  {term:"Local variable", cn:"局部变量", definition:"A variable declared inside a subroutine that exists and is accessible only while that subroutine runs.", level:"AS", topic:"Programming"},
  {term:"Global variable", cn:"全局变量", definition:"A variable declared so that it can be accessed from anywhere in a program.", level:"AS", topic:"Programming"},
  {term:"Concatenation", cn:"字符串连接", definition:"Joining two or more strings end to end to form a single longer string.", level:"AS", topic:"Programming"},
  {term:"Nested loop", cn:"嵌套循环", definition:"A loop placed inside the body of another loop, so the inner loop runs fully on each pass of the outer loop.", level:"AS", topic:"Programming"},
  {term:"Serial file", cn:"顺序（追加）文件", definition:"A file in which records are stored one after another in the order they were added, with no key order.", level:"AS", topic:"Programming"},
  {term:"Sequential file", cn:"按键有序文件", definition:"A file whose records are stored in order of a key field, allowing ordered processing.", level:"AS", topic:"Programming"},
  {term:"Trace table", cn:"追踪表/跟踪表", definition:"A table used to record the changing values of variables as an algorithm is worked through by hand.", level:"AS", topic:"Programming"},

  /* ==========================================================
     ========================  A2 级  ========================
     ========================================================== */

  /* ---------- Object-Oriented Programming (A2) ---------- */
  {term:"Encapsulation", cn:"封装", definition:"Bundling data and the methods that operate on it within a class, and restricting direct access to the data.", example:"Encapsulation keeps attributes private and exposed only through methods.", level:"A2", topic:"OOP"},
  {term:"Inheritance", cn:"继承", definition:"A mechanism where a subclass acquires the attributes and methods of a superclass and can add or override its own.", example:"Through Inheritance a subclass reuses the code of its superclass.", level:"A2", topic:"OOP"},
  {term:"Polymorphism", cn:"多态", definition:"The ability for a method call to behave differently depending on the object's class, such as an overridden method.", example:"Polymorphism lets the same method call behave differently per object type.", level:"A2", topic:"OOP"},
  {term:"Abstraction (OOP)", cn:"抽象（面向对象）", definition:"Modelling a real-world entity as a class that exposes only relevant attributes and methods, hiding internal detail.", level:"A2", topic:"OOP"},
  {term:"Class", cn:"类", definition:"A template or blueprint that defines the attributes and methods shared by objects of a given type.", level:"A2", topic:"OOP"},
  {term:"Object", cn:"对象", definition:"An instance of a class, with its own values for the attributes defined by that class.", level:"A2", topic:"OOP"},
  {term:"Method", cn:"方法", definition:"A subroutine defined within a class that acts on the object's data.", level:"A2", topic:"OOP"},
  {term:"Attribute", cn:"属性", definition:"A data value that describes a property of an object, defined by its class.", level:"A2", topic:"OOP"},
  {term:"Constructor", cn:"构造函数/构造方法", definition:"A special method that is called when an object is created, used to initialise its attributes.", level:"A2", topic:"OOP"},
  {term:"Getter", cn:"取值方法", definition:"A method that returns the value of a private attribute, providing controlled read access.", level:"A2", topic:"OOP"},
  {term:"Setter", cn:"赋值方法", definition:"A method that changes the value of a private attribute, providing controlled write access.", level:"A2", topic:"OOP"},
  {term:"Superclass", cn:"父类/基类", definition:"A class from which other classes inherit attributes and methods; also called a base or parent class.", level:"A2", topic:"OOP"},
  {term:"Subclass", cn:"子类/派生类", definition:"A class that inherits from a superclass and may add or override members; also called a derived or child class.", level:"A2", topic:"OOP"},
  {term:"Override", cn:"重写/覆盖", definition:"To provide a new implementation in a subclass for a method inherited from its superclass.", level:"A2", topic:"OOP"},

  /* ---------- Data Structures (A2) ---------- */
  {term:"Abstract data type", cn:"抽象数据类型", definition:"A data type defined by its behaviour and operations rather than its implementation; abbreviated ADT.", level:"A2", topic:"Data Structures"},
  {term:"Stack", cn:"栈", definition:"A last-in, first-out (LIFO) data structure where items are pushed onto and popped from the same end, the top.", example:"A Stack follows a last-in, first-out order.", level:"A2", topic:"Data Structures"},
  {term:"Queue", cn:"队列", definition:"A first-in, first-out (FIFO) data structure where items are added at the rear and removed from the front.", example:"A Queue follows a first-in, first-out order.", level:"A2", topic:"Data Structures"},
  {term:"Linked list", cn:"链表", definition:"A dynamic data structure of nodes, each holding data and a pointer to the next node.", level:"A2", topic:"Data Structures"},
  {term:"Binary tree", cn:"二叉树", definition:"A hierarchical data structure in which each node has at most two children, a left and a right.", level:"A2", topic:"Data Structures"},
  {term:"Binary search tree", cn:"二叉搜索树", definition:"A binary tree in which each node's left subtree holds smaller values and its right subtree larger values.", level:"A2", topic:"Data Structures"},
  {term:"Hash table", cn:"哈希表/散列表", definition:"A data structure that maps keys to values using a hash function to compute an index into an array.", level:"A2", topic:"Data Structures"},
  {term:"Hash function", cn:"哈希函数/散列函数", definition:"An algorithm that converts a key into an index in a hash table, aiming to distribute keys evenly.", level:"A2", topic:"Data Structures"},
  {term:"Collision", cn:"（哈希）冲突", definition:"In hashing, the situation where two different keys produce the same hash table index.", level:"A2", topic:"Data Structures"},
  {term:"Pointer", cn:"指针", definition:"A variable that stores the memory address of another item of data.", level:"A2", topic:"Data Structures"},
  {term:"Node", cn:"节点", definition:"An element of a linked structure that holds data and one or more pointers to other nodes.", level:"A2", topic:"Data Structures"},
  {term:"Tuple", cn:"元组", definition:"An ordered, immutable collection of values that cannot be changed after it is created.", level:"A2", topic:"Data Structures"},
  {term:"Record (composite)", cn:"记录（复合类型）", definition:"A data structure grouping related items of possibly different types under one name, accessed by field.", level:"A2", topic:"Data Structures"},
  {term:"Traversal", cn:"遍历", definition:"The process of visiting every node of a data structure such as a tree or list in a defined order.", level:"A2", topic:"Data Structures"},

  /* ---------- Algorithms & Complexity (A2) ---------- */
  {term:"Recursion", cn:"递归", definition:"A technique where a subroutine calls itself, with a base case to stop and a step moving toward it.", example:"Recursion occurs when a subroutine calls itself.", level:"A2", topic:"Algorithms"},
  {term:"Base case", cn:"基线情形/终止条件", definition:"The condition in a recursive routine that stops further recursion and returns a result directly.", level:"A2", topic:"Algorithms"},
  {term:"Big-O notation", cn:"大 O 表示法", definition:"A notation describing how an algorithm's time or space requirement grows with the size of the input.", example:"Linear search is O(n).", level:"A2", topic:"Algorithms"},
  {term:"Time complexity", cn:"时间复杂度", definition:"A measure of how the running time of an algorithm increases as the input size grows.", level:"A2", topic:"Algorithms"},
  {term:"Space complexity", cn:"空间复杂度", definition:"A measure of how the memory an algorithm needs increases as the input size grows.", level:"A2", topic:"Algorithms"},
  {term:"Insertion sort", cn:"插入排序", definition:"A sorting algorithm that builds a sorted list by taking each item and inserting it into its correct position.", level:"A2", topic:"Algorithms"},
  {term:"Merge sort", cn:"归并排序", definition:"A divide-and-conquer sort that splits the list, sorts each half recursively and merges the halves.", level:"A2", topic:"Algorithms"},
  {term:"Divide and conquer", cn:"分治法", definition:"A strategy that solves a problem by breaking it into smaller subproblems, solving them, then combining results.", level:"A2", topic:"Algorithms"},

  /* ---------- Programming Paradigms (A2) ---------- */
  {term:"Paradigm", cn:"编程范式", definition:"A style or approach to programming, defining how a solution is structured and expressed.", level:"A2", topic:"Paradigms"},
  {term:"Procedural programming", cn:"过程式编程", definition:"A paradigm structuring a program as a sequence of procedures and function calls that operate on data.", level:"A2", topic:"Paradigms"},
  {term:"Object-oriented programming", cn:"面向对象编程", definition:"A paradigm structuring a program around objects that combine data and the methods that act on it.", level:"A2", topic:"Paradigms"},
  {term:"Declarative programming", cn:"声明式编程", definition:"A paradigm in which the programmer states what result is wanted rather than how to compute it step by step.", level:"A2", topic:"Paradigms"},
  {term:"Low-level programming", cn:"低级编程", definition:"A paradigm using instructions close to machine level, giving direct control of hardware and memory.", level:"A2", topic:"Paradigms"},

  /* ---------- Databases (A2) ---------- */
  {term:"DDL", cn:"数据定义语言", definition:"Data Definition Language: the part of SQL used to define and modify database structure, such as CREATE and ALTER.", level:"A2", topic:"Databases"},
  {term:"DML", cn:"数据操纵语言", definition:"Data Manipulation Language: the part of SQL used to query and change data, such as SELECT, INSERT and UPDATE.", level:"A2", topic:"Databases"},
  {term:"SQL", cn:"结构化查询语言", definition:"Structured Query Language: a standard language for defining, querying and manipulating relational databases.", level:"A2", topic:"Databases"},
  {term:"First normal form", cn:"第一范式", definition:"A table is in 1NF when it contains no repeating groups and each field holds a single atomic value.", level:"A2", topic:"Databases"},
  {term:"Second normal form", cn:"第二范式", definition:"A table is in 2NF when it is in 1NF and every non-key attribute depends on the whole primary key.", level:"A2", topic:"Databases"},
  {term:"Third normal form", cn:"第三范式", definition:"A table is in 3NF when it is in 2NF and no non-key attribute depends on another non-key attribute.", level:"A2", topic:"Databases"},
  {term:"Transaction", cn:"事务", definition:"A sequence of database operations treated as a single unit that either completes fully or not at all.", level:"A2", topic:"Databases"},
  {term:"Index (database)", cn:"索引（数据库）", definition:"A structure that speeds up searching a database table on a particular attribute at the cost of extra storage.", level:"A2", topic:"Databases"},

  /* ---------- Hardware & Systems (A2) ---------- */
  {term:"Interrupt", cn:"中断", definition:"A signal to the processor that an event needs attention, causing it to suspend its current task and run a handler.", example:"An Interrupt signals the processor that an event needs attention.", level:"A2", topic:"Hardware"},
  {term:"Pipelining", cn:"流水线", definition:"A technique where the processor overlaps the fetch, decode and execute stages of successive instructions to increase throughput.", level:"A2", topic:"Hardware"},
  {term:"Interrupt service routine", cn:"中断服务程序", definition:"A routine that the processor runs in response to an interrupt before resuming the interrupted task.", level:"A2", topic:"Hardware"},
  {term:"Virtual memory", cn:"虚拟内存", definition:"A technique using part of secondary storage as an extension of RAM so that programs larger than physical memory can run.", level:"A2", topic:"Hardware"},
  {term:"Paging", cn:"分页", definition:"Dividing memory and processes into fixed-size pages to manage virtual memory efficiently.", level:"A2", topic:"Hardware"},
  {term:"Scheduling", cn:"调度", definition:"The operating system activity of deciding which process gets the processor and for how long.", level:"A2", topic:"Hardware"},

  /* ---------- Security & Networking (A2) ---------- */
  {term:"Encryption", cn:"加密", definition:"The process of converting data into an unreadable form using a key, so only authorised parties can read it.", example:"Encryption scrambles data so only authorised parties can read it.", level:"A2", topic:"Security"},
  {term:"Symmetric encryption", cn:"对称加密", definition:"Encryption using the same secret key to both encrypt and decrypt data.", level:"A2", topic:"Security"},
  {term:"Asymmetric encryption", cn:"非对称加密", definition:"Encryption using a public key to encrypt and a matching private key to decrypt, or vice versa.", level:"A2", topic:"Security"},
  {term:"Digital signature", cn:"数字签名", definition:"An encrypted digest attached to a message that confirms the sender's identity and that the message is unaltered.", level:"A2", topic:"Security"},
  {term:"SSL/TLS", cn:"SSL/TLS 协议", definition:"Protocols that establish an encrypted, authenticated connection between a client and server over a network.", level:"A2", topic:"Security"},
  {term:"Firewall", cn:"防火墙", definition:"Hardware or software that monitors and controls network traffic based on a set of security rules.", level:"A2", topic:"Security"},

  /* ---------- Data Structures (A2 · 扩充) ---------- */
  {term:"Graph", cn:"图", definition:"A data structure of vertices connected by edges, used to model relationships such as networks.", level:"A2", topic:"Data Structures"},
  {term:"Vertex", cn:"顶点", definition:"A node in a graph that may be connected to other nodes by edges.", level:"A2", topic:"Data Structures"},
  {term:"Edge", cn:"边", definition:"A connection between two vertices in a graph, which may be directed or weighted.", level:"A2", topic:"Data Structures"},
  {term:"Adjacency matrix", cn:"邻接矩阵", definition:"A two-dimensional array representing a graph, where each cell shows whether an edge links two vertices.", level:"A2", topic:"Data Structures"},
  {term:"Adjacency list", cn:"邻接表", definition:"A representation of a graph in which each vertex stores a list of the vertices it is directly connected to.", level:"A2", topic:"Data Structures"},
  {term:"Circular queue", cn:"循环队列", definition:"A queue implemented in a fixed array whose front and rear wrap around to reuse freed space.", level:"A2", topic:"Data Structures"},
  {term:"Priority queue", cn:"优先队列", definition:"A queue in which each item has a priority and the highest-priority item is removed first.", level:"A2", topic:"Data Structures"},
  {term:"Dynamic data structure", cn:"动态数据结构", definition:"A data structure that can grow or shrink at run time as items are added or removed, such as a linked list.", level:"A2", topic:"Data Structures"},
  {term:"Static data structure", cn:"静态数据结构", definition:"A data structure with a fixed size decided at compile time, such as an array.", level:"A2", topic:"Data Structures"},
  {term:"Chaining", cn:"链地址法/链接法", definition:"A method of resolving hash collisions by storing colliding items in a linked list at the same index.", level:"A2", topic:"Data Structures"},
  {term:"Root node", cn:"根节点", definition:"The single node at the top of a tree that has no parent.", level:"A2", topic:"Data Structures"},
  {term:"Leaf node", cn:"叶节点", definition:"A node in a tree that has no children.", level:"A2", topic:"Data Structures"},
  {term:"In-order traversal", cn:"中序遍历", definition:"A tree traversal that visits the left subtree, then the node, then the right subtree, giving sorted output for a BST.", level:"A2", topic:"Data Structures"},
  {term:"Free list", cn:"空闲链表", definition:"A list of unused nodes available to be allocated when new items are added to a dynamic structure.", level:"A2", topic:"Data Structures"},

  /* ---------- Algorithms & Complexity (A2 · 扩充) ---------- */
  {term:"Constant time", cn:"常数时间", definition:"Describes an algorithm whose running time does not change with input size, written as O(1).", level:"A2", topic:"Algorithms"},
  {term:"Linear time", cn:"线性时间", definition:"Describes an algorithm whose running time grows in direct proportion to the input size, written as O(n).", level:"A2", topic:"Algorithms"},
  {term:"Logarithmic time", cn:"对数时间", definition:"Describes an algorithm whose running time grows with the logarithm of the input size, written as O(log n).", example:"Binary search runs in logarithmic time.", level:"A2", topic:"Algorithms"},
  {term:"Quadratic time", cn:"平方时间", definition:"Describes an algorithm whose running time grows with the square of the input size, written as O(n^2).", level:"A2", topic:"Algorithms"},
  {term:"Depth-first search", cn:"深度优先搜索", definition:"A graph traversal that explores as far as possible along each branch before backtracking, often using a stack.", level:"A2", topic:"Algorithms"},
  {term:"Breadth-first search", cn:"广度优先搜索", definition:"A graph traversal that visits all neighbours of a node before moving to the next level, using a queue.", level:"A2", topic:"Algorithms"},
  {term:"Stack frame", cn:"栈帧", definition:"The block of data placed on the call stack for each active subroutine, holding its parameters and return address.", level:"A2", topic:"Algorithms"},
  {term:"Call stack", cn:"调用栈", definition:"The area of memory that stores the return addresses and local data of subroutines that are currently running.", level:"A2", topic:"Algorithms"},

  /* ---------- Compilation & Language Processing (A2) ---------- */
  {term:"Lexical analysis", cn:"词法分析", definition:"The first stage of compilation, which groups source characters into tokens and removes spaces and comments.", level:"A2", topic:"Compilation"},
  {term:"Syntax analysis", cn:"语法分析", definition:"The compilation stage that checks tokens follow the grammar of the language and builds a parse structure.", level:"A2", topic:"Compilation"},
  {term:"Code generation", cn:"代码生成", definition:"The compilation stage that produces object or machine code from the analysed program.", level:"A2", topic:"Compilation"},
  {term:"Code optimisation", cn:"代码优化", definition:"The compilation stage that improves generated code so it runs faster or uses less memory.", level:"A2", topic:"Compilation"},
  {term:"Token", cn:"词法单元/记号", definition:"A single meaningful unit, such as a keyword or operator, produced during lexical analysis.", level:"A2", topic:"Compilation"},
  {term:"Symbol table", cn:"符号表", definition:"A structure built during compilation that records identifiers together with their type and address.", level:"A2", topic:"Compilation"},
  {term:"Backus-Naur Form", cn:"巴科斯-诺尔范式", definition:"A formal notation using rules to describe the grammar of a programming language; abbreviated BNF.", level:"A2", topic:"Compilation"},
  {term:"Syntax diagram", cn:"语法图", definition:"A graphical way of showing the valid syntax of a language as an alternative to Backus-Naur Form.", level:"A2", topic:"Compilation"},
  {term:"Reverse Polish notation", cn:"逆波兰表示法/后缀表示法", definition:"A way of writing expressions with the operator after its operands, removing the need for brackets.", example:"3 4 + is Reverse Polish notation for 3 + 4.", level:"A2", topic:"Compilation"},

  /* ---------- Operating Systems & Processes (A2) ---------- */
  {term:"Process", cn:"进程", definition:"A program in execution, together with the resources and state the operating system allocates to it.", level:"A2", topic:"Hardware"},
  {term:"Thread", cn:"线程", definition:"A single sequence of execution within a process that can run alongside other threads sharing its memory.", level:"A2", topic:"Hardware"},
  {term:"Deadlock", cn:"死锁", definition:"A situation where two or more processes are each waiting for a resource the other holds, so none can proceed.", example:"A Deadlock leaves processes waiting on each other forever.", level:"A2", topic:"Hardware"},
  {term:"Semaphore", cn:"信号量", definition:"A variable used to control access to a shared resource by signalling whether it is free or in use.", level:"A2", topic:"Hardware"},
  {term:"Mutual exclusion", cn:"互斥", definition:"Ensuring that only one process at a time can use a shared resource, to prevent conflicts.", level:"A2", topic:"Hardware"},
  {term:"Round robin", cn:"时间片轮转", definition:"A scheduling method that gives each process a fixed time slice of the processor in turn.", level:"A2", topic:"Hardware"},
  {term:"Page fault", cn:"缺页", definition:"An event raised when a program accesses a page that is not currently in main memory.", level:"A2", topic:"Hardware"},
  {term:"Thrashing", cn:"抖动/颠簸", definition:"Excessive paging that leaves the processor spending more time swapping pages than doing useful work.", level:"A2", topic:"Hardware"},
  {term:"Kernel", cn:"内核", definition:"The core part of an operating system that manages memory, processes and hardware access.", level:"A2", topic:"Hardware"},
  {term:"Garbage collection", cn:"垃圾回收", definition:"Automatic reclaiming of memory that is no longer referenced by a program, freeing it for reuse.", level:"A2", topic:"Hardware"},

  /* ---------- Databases (A2 · 扩充) ---------- */
  {term:"Boyce-Codd normal form", cn:"BC 范式", definition:"A stricter form of 3NF in which every determinant of a functional dependency is a candidate key; abbreviated BCNF.", level:"A2", topic:"Databases"},
  {term:"Atomicity", cn:"原子性", definition:"The ACID property that a transaction is all-or-nothing, so partial changes are never left in the database.", level:"A2", topic:"Databases"},
  {term:"Consistency (ACID)", cn:"一致性（ACID）", definition:"The ACID property that a transaction moves the database from one valid state to another, keeping all rules satisfied.", level:"A2", topic:"Databases"},
  {term:"Isolation", cn:"隔离性", definition:"The ACID property that concurrent transactions do not interfere, giving the same result as if run one after another.", level:"A2", topic:"Databases"},
  {term:"Durability", cn:"持久性", definition:"The ACID property that once a transaction is committed its changes survive even a later system failure.", level:"A2", topic:"Databases"},
  {term:"Record locking", cn:"记录锁定", definition:"Preventing more than one user from changing the same record at once by locking it during an update.", level:"A2", topic:"Databases"},
  {term:"Candidate key", cn:"候选键", definition:"An attribute or set of attributes that could serve as the primary key because it uniquely identifies each record.", level:"A2", topic:"Databases"},
  {term:"Secondary key", cn:"辅助键/次键", definition:"An attribute used to search or sort records that is not the primary key of the table.", level:"A2", topic:"Databases"},

  /* ---------- Security & AI (A2 · 扩充) ---------- */
  {term:"Public key", cn:"公钥", definition:"The freely shared key in asymmetric encryption, used to encrypt data or verify a signature.", level:"A2", topic:"Security"},
  {term:"Private key", cn:"私钥", definition:"The secret key in asymmetric encryption, kept by its owner to decrypt data or create a signature.", level:"A2", topic:"Security"},
  {term:"Digital certificate", cn:"数字证书", definition:"An electronic document issued by a trusted authority that binds a public key to the identity of its owner.", level:"A2", topic:"Security"},
  {term:"Hashing", cn:"哈希/散列", definition:"Applying a one-way function to data to produce a fixed-length digest, used to check integrity or store passwords.", level:"A2", topic:"Security"},
  {term:"Denial of service", cn:"拒绝服务攻击", definition:"An attack that floods a system with requests so that it cannot serve its legitimate users.", level:"A2", topic:"Security"},
  {term:"Machine learning", cn:"机器学习", definition:"A branch of artificial intelligence in which a system improves its performance on a task by learning from data.", level:"A2", topic:"AI"},
  {term:"Artificial neural network", cn:"人工神经网络", definition:"A model made of interconnected nodes in layers that learns patterns by adjusting the weights between them.", level:"A2", topic:"AI"},
  {term:"Backpropagation", cn:"反向传播", definition:"An algorithm that trains a neural network by adjusting weights based on the error of its output.", level:"A2", topic:"AI"},
  {term:"Supervised learning", cn:"监督学习", definition:"Machine learning that trains a model on data already labelled with the correct answers.", level:"A2", topic:"AI"},
  {term:"Unsupervised learning", cn:"无监督学习", definition:"Machine learning that finds patterns or groupings in data that has no labels.", level:"A2", topic:"AI"},
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
