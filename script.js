document.addEventListener("DOMContentLoaded", function() {
    fetch("news.json")
        .then(response => response.json())
        .then(newsData => {
            const newsSection = document.getElementById("news");

            newsData.forEach(news => {
                const newsCard = document.createElement("div");
                newsCard.classList.add("news-card");

                // رابط للخبر
                const newsLink = document.createElement("a");
                newsLink.href = `news-detail.html?id=${news.id}`; // رابط صفحة التفاصيل
                newsLink.style.textDecoration = "none";
                newsLink.style.color = "inherit";

                // صورة الخبر
                const newsImage = document.createElement("img");
                newsImage.src = news.image;
                newsLink.appendChild(newsImage);

                // عنوان الخبر
                const newsTitle = document.createElement("h3");
                newsTitle.textContent = news.title;
                newsLink.appendChild(newsTitle);

                // تاريخ الخبر
                const newsDate = document.createElement("p");
                newsDate.textContent = `تاريخ الخبر: ${news.date}`;
                newsDate.style.color = "#888";
                newsLink.appendChild(newsDate);

                // محتوى الخبر (مختصر)
                const newsText = document.createElement("p");
                newsText.textContent = news.content;
                newsLink.appendChild(newsText);

                // إضافة الرابط إلى الكارت
                newsCard.appendChild(newsLink);

                // إضافة الكارت إلى القسم
                newsSection.appendChild(newsCard);
            });
        })
        .catch(error => console.error("خطأ في تحميل الأخبار:", error));
});