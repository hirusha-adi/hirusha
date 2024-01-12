---
title: Chapter 1 - Information representation
sidebar_label: 1. Information representation
slug: chapter_1_information_representation
sidebar_position: 1
---

## Basics

### Structure

- In a byte, there are 8 bits:
    
```
         0   0   0   0     0   0   0   0
(most significant bit)		 (least significant bit) 
```

### Addition

- overflow errors are very common here 

![iaa](https://cdn.discordapp.com/attachments/1163847683207856178/1168495164176740352/image.png?ex=6551f8ec&is=653f83ec&hm=459efa9b9bbd0e8ecc1c8ad400b3082d53da55f714b7baafc2384fa18ec23846&)

### Substraction

- Basics:
	- **1 - 0  =  1**
	- **10 - 1  =  1**
	- **11 - 1  =  10**

- Note:
	- You can’t: `0 - 1`, so, you have to borrow

![iaa3](https://cdn.discordapp.com/attachments/1163847683207856178/1168495537612410950/image.png?ex=6551f945&is=653f8445&hm=3bb31abb1c54432eb229b66b9e2934971113e956bf3f7879b766c4687f36584b&)

-  this is discussed further under [Two's Complement](#twos-complement)

## Decimal

### to Binary

![img1](https://cdn.discordapp.com/attachments/1163847683207856178/1168486746800017502/image.png?ex=6551f115&is=653f7c15&hm=06a8618235cd1998b2c2a04366ff218c8d0511656579222a7a83ac5936591a54&)

### to Hex

#### Method 1 (No Calculator)

- first, convert to Binary
- then, convert to Hexadeximal
    - consider each 4 bits from LSB (as blocks of 4 bits)

#### Method 2 (Need Calculator)

![img3](https://cdn.discordapp.com/attachments/1163847683207856178/1168487441972334642/image.png?ex=6551f1bb&is=653f7cbb&hm=c564ea57d53e5553abf0d020cee6cf1692b6bbc067fe45cba3d39c4715bda0f9&)

## Binary

### to Decimal

![img2](https://cdn.discordapp.com/attachments/1163847683207856178/1168487246043828264/image.png?ex=6551f18c&is=653f7c8c&hm=88d7984e5e0559886d89900aa03b5a2edc935fdaaf94682315264b739ce2a4b6&)

### to Hex

![img6](https://cdn.discordapp.com/attachments/1163847683207856178/1168488572899315803/image.png?ex=6551f2c9&is=653f7dc9&hm=0bfdc47d1cf8aaa8a633be0b92b4a841c262ed78394295de55e45c8aaf0e541f&)

## Hexadecmal

### to Decimal

![img4](https://cdn.discordapp.com/attachments/1163847683207856178/1168487979614994463/image.png?ex=6551f23b&is=653f7d3b&hm=8a1d04ea8f8e88c983eaaf4b0ab5d30b98adcc6b87cfde34c2b4714b9db0d7b5&)

![img5](https://cdn.discordapp.com/attachments/1163847683207856178/1168488190110339122/image.png?ex=6551f26d&is=653f7d6d&hm=b1300e46f4bbe013e7828e0ec09e214ef15d46aea304c12343da8186a591b5c9&)

### to Binary

![img7](https://cdn.discordapp.com/attachments/1163847683207856178/1168488731494330428/image.png?ex=6551f2ef&is=653f7def&hm=ec9cb8efe99fa07cf945773907d3aa113e40ba92c1a75da576197ec76b4144d1&)

## Number Representation

### Unsigned Integers

- store only positive numbers
- uses all bits to store the value

### Signed Integers

- 1 bit is used to store the sign
- can store negative number
    - if MSB is one it's negative

- there are two types
    1. one's complement 
    2. two's complement 

![im7](https://cdn.discordapp.com/attachments/1163847683207856178/1168491617884319804/image.png?ex=6551f59f&is=653f809f&hm=a980b7cad8d786a59aae406fce8d3f62f282f78bcc377c2dc1247f5ef19b279f&)

### Ones Complement

one from each bit or invert every bit

![im1](https://cdn.discordapp.com/attachments/1163847683207856178/1168490255754743808/image.png?ex=6551f45a&is=653f7f5a&hm=010b2a17035c42f07e0526a6b07012f32de666b137541149a3ccb24e4c7b019f&)

### Twos Complement

- ones complement + 1
- or
- start from the first bit (LSB) upto the first '1' (inclusive) and invert everything from that point

![im2](https://cdn.discordapp.com/attachments/1163847683207856178/1168490442850050098/image.png?ex=6551f487&is=653f7f87&hm=1cddb9d8658f79fb241879e8cb3c13276ccf3118991ae30040e9ce04d1faab44&)

![im3](https://cdn.discordapp.com/attachments/1163847683207856178/1168490417222856704/image.png?ex=6551f480&is=653f7f80&hm=ada722561814280d3612e71aa0e4e9062848f111fe789bd33c468322ff889ea5&)


- when substracting negative numbers, 
    - convert the absolute value of that negative number to binary, 
        - ( absolute value of of `-4` is `4` )
    - gets its twos complement 
    - and add it to the number we need to subtract from

![im4](https://cdn.discordapp.com/attachments/1163847683207856178/1168491077917999236/image.png?ex=6551f51e&is=653f801e&hm=8725a7f48c6021093a89eb48e48a218dbe6dc84c6c8dff723945db71616c35a3&)

![im5](https://cdn.discordapp.com/attachments/1163847683207856178/1168491091746635867/image.png?ex=6551f521&is=653f8021&hm=7b332c66a013a570959bdbf0efd07006fa43df6322f54b03883723423e18e873&)

## Binary Coded Decimals 

- often reffered to as BCD

- valid only if 0 (0000) to 9 (1001)
- Only **0000-1001** are **valid**
- eg:
    - “85” can be represented as:
        - 0000**1000**  0000**0101** 	*(one BCD digit per byte)*
        - 1000**0101** 			        *(two BCD digits per byte)*

    - “8503” can be represented as:
        - 0000**1000** 0000**0101** 0000**0000** 0000**0011**   *(one BCD digit per byte)*
        - 1000**0101**0000**0011** 					            *(two BCD digits per byte)*


## Overflow

#### What is an Overlfow?

#### Example

![ia1](https://cdn.discordapp.com/attachments/1163847683207856178/1168493630462361740/image.png?ex=6551f77f&is=653f827f&hm=19344495742ce33a05e7a91ba9ba3ce8988266e62ac9b3ff06d5c59102204655&)

### BCD Overflow Fix

- add `0110` to fix

![ia1](https://cdn.discordapp.com/attachments/1163847683207856178/1168493807545876480/image.png?ex=6551f7a9&is=653f82a9&hm=ae1052078c97a90a86983f5eea465f0814440bd3d4e89af66500a8bd9b17aa03&)


## Character Sets

- symbols/list of characters recognised by a computer

#### How is a word stored?

- each character gets replaced by their unique code
- the codes are stored in the same order as in the word

### ASCII

- uses 7 bits per character
- has lesser character range
- english characters only

### Extended ASCII

- uses 8 bits per character
- slightly larger character range that ASCII

### Unicode

- uses 4 bytes per character
- has a greater character range
- standardized 

EXAMPLE SUPERSET / SUBSET

#### Remember these character codes

- `a` : 97
- `z` : 122
- `A` : 65
- `Z` : 90

#### What is the character code of `c` given that the character code of `a` is `97`?

- basically, start counting

    - `a` : 97
    - `b` : 98
    - `c` : 99

- character code of `c` is 99

- you can also add 3 to the character code of `a` which is `97` as `c` is 3 letters to right from `a`

## Sound

### Definitions

#### Sampling

- measuring the amplitude of the wave at a regualr time interval

#### Sampling Resolution

- number of bits used to represent each sample

#### Sampling Rate

- number of samples taken per unit time

### Components

#### ADC

- Analogue to Digital Converter
- Converts analogue sound wave to a digital form so that the computer can understand and interpret it

#### Band Lmiting Filter

- removes high frequency parts that humans cannot hear

## Vector Graphics

- graphics made of drawing objects in a drawing list

#### How are vectors stored?

- series of geometric shapes
- has coordinates stored
- contains the drawing list
- has commands for all objects + attributes (properties)
    - like: color, line thickness, line style, background color, foreground color

![vec1](https://cdn.discordapp.com/attachments/1163847683207856178/1168493980862910555/image.png?ex=6551f7d2&is=653f82d2&hm=4ab15c629f2f750afcbc23ba406b184a41ef327c73fe6795bd2415f893af8fdd&)


- **->** Vector Graphic File
    - **->** Drawing List
        - **->** Command for each object
            - **->** Attributes
                - **->** Define a property of the object
                    - **->** Basic Geometric Data

#### why vector graphics have a lower file size?

- only the instructions to create the image are stored
- not individual pictures, like bitmap images

#### why don't vector graphics loose quality when resized?

- the instructions to create the image are stored
- the image is calculated again dynamically to the required size using these given instructions
- therefore, no distortions / not pixellating

#### file formats?

- `.svg`
- `.cdr`
- `.eps`

### Definitions

#### Drawing Object

- component defined by a geometric formulae and associated properties

#### Property

- defines one aspect of the appearance of drawing objects

## Bitmaps

#### File Formats

- `.bmp`
- `.png`
- `.jpg`
- `.jpeg`

### Defnitions

#### Pixel

- smallest identifiable component of a bitmap image
- image is made from a two dimentional pixel array
- each pixel in this array has a position and a color

#### Color Depth

- total number of colors that can be represented in an image
- number of bits per pixel
- `8` bits = `256` colors
- and also
    
    - `4` colors = `2` bits
    - `8` colors = `3` bits
    - `5` colors = `3` bits (as `5>4`)

#### Bit Depth

- number of bits used to represent each pixel in an image
- number of bits used to represent one pixel
- allows colors variations and shades
- `8` bits = `256` shades of one color

#### Image Resultion

- number of pixels in image
- `length * height` in pixels

### Bitmap Header

- stores metadata about the image:

    - bit depth
    - image resolution
    - dimensions
    - offset of image data in file
    - compression type
    - file type info (specially important for linux)

### Calculating File Size

- `(length in px) * (breadth in px) * (color depth) = X bits`
- then, convert from bits to whatever you want
- the original file size may be larger than what was estimated during this calculation
- its because the did not include the size of the bitmap header

- eg:
    1.  calculate a value for the minimum size of a bitmap file. The bitmap is to use a bit depth of 8 and the bitmap is to be printed with 72 dpi (dots per inch) and to have dimensions 5 inches by 3 inches

        - bit depth is 8, which means 8 bits for each of the RGB components, so 24 (8*3) bits are needed for one pixel.
        - 72 dpi means 72 pixels per inch
        - number of pixels per row is 5 × 72 = 360 pixels
        - number of pixels per column is 3 × 72 = 216 pixels
        - total number of pixels is 360 × 216 = 77 760 pixels
        - total number of bits is 77 760 × 24 = 1866240 bits
        - File size is (1866240/8/1024) = 227.8 KiB

    2.  resolution is 1366 by 768 and color depth is 24

        - number of bits we need is: 1366 * 768 * 24 = 25178112 bits
        - = 25178112 ÷ 8 = 3147264 bytes
        - = 3147264 ÷ 1024 = 3073.5 kibibytes (3073.5 KiB)
        - = 3073.5 ÷ 1024 = approximately 3 MiB

## Compression

#### Why compress data?

- to save storage space
- reduce transmission costs / time 
- faster load times (important for websites)
- meet file size limitations (eg: in an email)

### Lossy Compression

- data is lost ar compression
- decompressed file won't be same as the original
- has a higher compression ratio

### Lossless Compression

- all data is retained
- nothing is lost
- low compression ratio
- has two methods
    1. Run Length Encoding
    2. Huffman Encoding (click here to learn something beyond the scope of this syllabus)

#### Run Length Encoding

- a lossless compression technique
- looks for **consecutive** blocks of same repeating bits
- and replace them with one block of those bits
- along with the number of times its repeated
- eg:
    - `aaaaa` can be replaced with `5a`
    - `393939` can be replaced with `339`
        - here, the first `3` tells that there are 3 sets of `39`

### Compressing Data

#### Compressing Images

- use RLE for areas with same color (lossless)
- reduce the resolution (lossy)
    - fewer pixels stored
    - less storage occupied
- reduce the color depth (lossy)
    - less colors per pixel
    - each pixel has fewer bits to be stored
    - less storage is occupied

#### Compressing Audio

- use RLE for similiar amplitude points (lossless)
- reduce the sampling resolution (lossy)
    - less bits used for each sample
- reduce sampling rate
    - less samples taken per second

#### Compressing Text

- **DO NOT** use lossy compression (we need to retain the original data)
- if characters are lost
- it won't make sense

##### Why RLE might be bad for compressing text files?

- with RLE, `aaaaa` is written as `a5`
- most characters are used only once in sequence
- RLE with therefore give a bad compression ratio
- or even be larger than the source file

## Other

### Multimedia Container Format

- type of format that combines sound and image components of the video

#### File Formats

- `.mp4`
- `.wmv`
- `.avi`

### Bitmaps vs Vectors

#### Bitmaps

- loose quality when charged

#### Vectors

- smaller file size
- easy storage and transmission

