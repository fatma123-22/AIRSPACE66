// الحصول على زر "Sign in" من الصفحة
const sign_in_btn = document.querySelector("#sign-in-btn");

// الحصول على زر "Sign up" من الصفحة
const sign_up_btn = document.querySelector("#sign-up-btn");

// الحصول على العنصر الرئيسي للحاوية الذي يحتوي على كل العناصر (النماذج واللوحات)
const container = document.querySelector(".container");

// إضافة حدث "click" لزر "Sign up"
sign_up_btn.addEventListener("click", () => {
  // عند النقر على زر "Sign up"، يتم إضافة كلاس جديد للحاوية
  container.classList.add("sign-up-mode");
  // الكلاس "sign-up-mode" سيُستخدم لتغيير الشكل أو التحريك بناءً على التنسيق في CSS
});

// إضافة حدث "click" لزر "Sign in"
sign_in_btn.addEventListener("click", () => {
  // عند النقر على زر "Sign in"، يتم إزالة الكلاس "sign-up-mode" من الحاوية
  container.classList.remove("sign-up-mode");
  // هذا يعيد النمط أو الحركات إلى الوضع الأساسي الخاص بتسجيل الدخول
});