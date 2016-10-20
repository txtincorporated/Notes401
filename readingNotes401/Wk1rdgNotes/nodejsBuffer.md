# Code 401 Buffer, File System, and Asynchronicity
## Notes

### [Node.js "Buffer" Documentation](https://nodejs.org/api/buffer.html#buffer_buffer)
#### QUESTIONS & COMMENTS
1. **WHAT IS** buffer pooling? (See below.)
1. **NOTE** that 
    > It is possible to convert back and forth between Buffer instances and ordinary JavaScript strings by using an explicit character encoding.
      
    EXAMPLE:  

    ```javascript 
    const buf = Buffer.from('hello world', 'ascii');

    // Prints: 68656c6c6f20776f726c64
    console.log(buf.toString('hex'));

    // Prints: aGVsbG8gd29ybGQ=
    console.log(buf.toString('base64'));
    ```
1. **RE. BUFFERS AND TYPED ARRAY:** Does the example 
  ```javascript
  const arr = new Uint16Array(2);

  arr[0] = 5000;
  arr[1] = 4000;

  // Copies the contents of `arr`
  const buf1 = Buffer.from(arr);

  // Shares memory with `arr`
  const buf2 = Buffer.from(arr.buffer);

  ```

  mean that `buf2` is a reference copy while the other is a value copy? 


#### TERMS & CONCEPTS
  * **BUFFER POOLING:** Some sort of caching scheme. 


### [Node.js File System](https://nodejs.org/api/fs.html#fs_file_system)
#### QUESTIONS & COMMENTS
1. **RE. ARROW FUNCTIONS** Still a bit hazy on the syntax.  Why do some begin with an arg enclosed in `()` while other don't?
1. **NOTE...** 
  > that on certain file systems (such as NTFS and HFS+) filenames will always be encoded as UTF-8. On such file systems, passing non-UTF-8 encoded Buffers to fs functions will not work as expected.  

1. **RE. EVENT: ERROR** Is this what the `err` param keeps referring to?


#### TERMS & CONCEPTS
  * **`EEXIST`:** Error code meaning 'File already exists.' 
  * **`ENOENT`:** Error code meaning 'File does not exist.' 


### [Max Ogden Art of Node -- Callbacks](https://github.com/maxogden/art-of-node#callbacks)
#### QUESTIONS & COMMENTS
1. **NOTE...** 
  > that I/O is reallyyy reallyyy sloowwww. A ballpark figure would be that talking to a hard drive is about 100,000 times slower than talking to memory (e.g. RAM).

1. **ALSO NOTE** that the key to understanding callbacks...
  > is to realize that they are used when you don't know when some async operation will complete, but you do know where the operation will complete — the last line of the async function!

1. **NICE SCHEMATIC** of chaining callbacks...
```javascript
  a(function() {
    b(function() {
      c()
    })
  })
```


### [How to Use Buffers in Node.js](https://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers/)
#### QUESTIONS & COMMENTS
1. **WHAT IS** [big-endian vs. little-endian](https://en.wikipedia.org/wiki/Endianness)?  Now that I'm growing older and becoming a man, I feel I should stop forgetting this all the time.  Here is what Wikipedia has to say:
  > Endianness is the order of the bytes that compose a digital word in computer memory. It also describes the order of byte transmission over a digital link.
See below for more.

1. **NOTE** that 
  > When buffer.write has 3 arguments, the second argument indicates an offset, or the index of the buffer to start writing at.

  EXAMPLE  
  ```javascript
    > buffer.write("Hello", "utf-8")
    5
  ```  
  > we wrote to five bytes of the buffer. The fact that the string "Hello" is also 5 characters long is coincidental  
  
  ```javascript
    > buffer.write("world1", 5, "utf-8")
    7
  ```

#### TERMS & CONCEPTS
  * **[BIG-ENDIAN](https://en.wikipedia.org/wiki/Endianness):** Scheme in which the bits are arranged from [most-significant to least-significant](https://en.wikipedia.org/wiki/Most_significant_bit). 
  * **[LITTLE-ENDIAN](https://en.wikipedia.org/wiki/Endianness):** Just guess! 

