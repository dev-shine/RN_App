الصيغة العامة لإستخدام ال api كالتالي
http://api-mujtahed.demo.uvix10.com/api2/public/api/endpoint
بحيث endpoint هي متغيرة حسب العملية التي يتم الإستعلام عنها  كالتالي:
http://api-mujtahed.demo.uvix10.com/api2/public/api/ register
http://api-mujtahed.demo.uvix10.com/api2/public/api/ getUserPhone
http://api-mujtahed.demo.uvix10.com/api2/public/api/ getVerificationCode
http://api-mujtahed.demo.uvix10.com/api2/public/api/ sendVerificationCode
http://api-mujtahed.demo.uvix10.com/api2/public/api/ login
http://api-mujtahed.demo.uvix10.com/api2/public/api/ logout
http://api-mujtahed.demo.uvix10.com/api2/public/api/ checkToken
مثال على نتيجة التحقق من ال token :
في حالة التوكن موجودة {"status":"success","data":"valid"}
في حالة التوكن غير موجودة {"status":"error","data":"invalid"}


1)  /register:
- Request data : required (userName, date_of_birth, email, gender, class_level, password, repeatpassword)
- Response: status (error), data ( if messing data array of error messages, if registration done: message 'Unauthorized device',  token )
2)  /getUserPhone: this will send user phone number with stars to hide part of it
- Request data : token
- Response: status (error/success), data ( has ether error message or phone number if success)
3)  /getVerificationCode:
- Request data : required (token), optional (phoneNmber)
- Response: status (error/success), data ( has ether error or success message )
4) /sendVerificationCode:
- Request data : required (token,code)
- Response: status (error/success), data ( has ether error or success message )
5) /login:
- Request data : required (userName,password)
- Response: status (error/success), data ( has ether error or success message )
6) /logout:
- Request data : required (token)
- Response: status (error/success), data ( has ether error or "logged out successfully" )
7) /checkToken:
- Request data : required (token)
- Response: status (error/success), data ( "valid" or "invalid" )