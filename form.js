document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact_form");
  
    if (!form) return;
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch("https://formspree.io/f/mnndevwz", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          // Show success message
          document.getElementById("success_message").style.display = "block";
  
          // Refresh after delay
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          // Show error message
          document.getElementById("error_message").style.display = "block";
        }
      } catch (error) {
        document.getElementById("error_message").style.display = "block";
        console.error("Form submission error:", error);
      }
    });
  });
