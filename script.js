     
    function toggleComments(icon) {
        const commentsSection = icon.closest('.news-card').querySelector('.comments-section');
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
      }
    
      function addComment(button) {
        const container = button.closest('.comments-section');
        const input = container.querySelector('.comment-input');
        const commentText = input.value.trim();
    
        if (commentText !== "") {
          const commentList = container.querySelector('.comments-list');
          const newComment = document.createElement('p');
          newComment.textContent = commentText;
          commentList.appendChild(newComment);
          input.value = "";
        }
      }
  
    
      function searchNews() {
        const input = document.getElementById("searchInput").value.toLowerCase();
        const cards = document.querySelectorAll(".news-card");
        cards.forEach(card => {
          const text = card.innerText.toLowerCase();
          card.style.display = text.includes(input) ? "block" : "none";
        });
      }
  
      function closeLogin() {
        document.getElementById("loginSection").style.display = "none";
      }


  function convertToEmbedURL(url) {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname.includes('youtube.com') && urlObj.searchParams.get("v")) {
        return `https://www.youtube.com/embed/${urlObj.searchParams.get("v")}`;
      } else if (urlObj.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${urlObj.pathname.substring(1)}`;
      }
    } catch {
      return null;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".video-wrapper");

    wrappers.forEach(wrapper => {
      const videoURL = wrapper.getAttribute("data-url");
      const embedURL = convertToEmbedURL(videoURL);

      if (embedURL) {
        wrapper.innerHTML = `
          <iframe width="100%" height="200" src="${embedURL}" frameborder="0" allowfullscreen></iframe>
        `;
      } else {
        wrapper.innerHTML = "<p>Invalid YouTube URL</p>";
      }
    });
  });



  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const icon = document.getElementById("menuIcon");
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
      icon.textContent = "✖";
    } else {
      icon.textContent = "☰";
    }
  }

  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const icon = document.getElementById("menuIcon");
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
      icon.textContent = "✖";
    } else {
      icon.textContent = "☰";
    }
  }