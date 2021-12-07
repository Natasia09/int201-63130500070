// Escape Sequences in Strings
// Quotes (เครื่องหมายคำพูด) ไม่ใช่อักขระตัวเดียวที่สามารถ escaped ได้ใน string มีเหตุผลสองประการในการใช้ escaping characters:

// เพื่อให้คุณสามารถใช้อักขระที่คุณอาจไม่สามารถพิมพ์ได้ เช่น carriage return (การขึ้นบรรทัดใหม่)

// เพื่อให้คุณสามารถแสดง quotes หลายตัวใน string โดยที่ JavaScript ไม่ได้ตีความหมายในสิ่งที่คุณต้องการผิด

// เราเรียนสิ่งนี้จากหัวข้อที่แล้ว
    // \'	single quote
    // \"	double quote
    // \\	backslash
    // \n	newline
    // \r	carriage return
    // \t	tab
    // \b	word boundary
    // \f	form feed
    var myStr ="FirstLine\n\t\\SecondLine\nThirdLine"