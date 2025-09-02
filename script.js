$(document).ready(function() {
    // Initialize all components when DOM is ready
    initSidebar(); // Set up sidebar toggle functionality
    initDropdown(); // Handle user menu dropdown
    initModal(); // Manage modal open/close
    initForm(); // Form submission and validation
    initChart(); // Draw simple chart on canvas
    initTheme(); // Theme toggle functionality
    initSearch(); // Search functionality for tables

    // Sidebar functionality
    function initSidebar() {
        $('#sidebar-toggle').click(function() {
            $('.sidebar').toggleClass('open');
        });
    }

    // User menu dropdown
    function initDropdown() {
        $('.user-menu').click(function() {
            $('.dropdown').toggle();
        });
    }

    // Modal functionality
    function initModal() {
        $('#add-user-btn').click(function() {
            $('#add-user-modal').show();
        });

        $('.close').click(function() {
            $('#add-user-modal').hide();
        });

        $(window).click(function(event) {
            if (event.target == document.getElementById('add-user-modal')) {
                $('#add-user-modal').hide();
            }
        });
    }

    // Form submission with validation and loading
    function initForm() {
        $('.form').submit(function(event) {
            event.preventDefault();
            const form = $(this);
            const submitBtn = form.find('button[type="submit"]');

            // Validation
            let isValid = true;
            form.find('input[required], select[required]').each(function() {
                if (!$(this).val().trim()) {
                    $(this).css('border-color', 'red');
                    isValid = false;
                } else {
                    $(this).css('border-color', '');
                }
            });

            if (!isValid) {
                showToast('Please fill in all required fields.');
                return;
            }

            // Loading state
            submitBtn.addClass('loading').prop('disabled', true);

            // Simulate async operation
            setTimeout(function() {
                submitBtn.removeClass('loading').prop('disabled', false);
                showToast('Form submitted successfully!');
                // Save to localStorage
                const formData = {};
                form.serializeArray().forEach(item => {
                    formData[item.name] = item.value;
                });
                localStorage.setItem('formData', JSON.stringify(formData));
            }, 2000);
        });

        // Add confirmation for delete
        $('.btn-danger').click(function(event) {
            if (!confirm('Are you sure you want to delete this item?')) {
                event.preventDefault();
            }
        });

        // Load saved data
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const data = JSON.parse(savedData);
            for (const key in data) {
                $(`[name="${key}"]`).val(data[key]);
            }
        }
    }

    // Toast notification
    function showToast(message) {
        $('#toast').text(message).fadeIn();
        setTimeout(function() {
            $('#toast').fadeOut();
        }, 3000);
    }

    // Simple chart
    function initChart() {
        const canvas = document.getElementById('chart');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#007bff';
            ctx.fillRect(10, 50, 50, 100);
            ctx.fillRect(70, 30, 50, 120);
            ctx.fillRect(130, 70, 50, 80);
            ctx.fillStyle = '#000';
            ctx.font = '12px Arial';
            ctx.fillText('Jan', 25, 170);
            ctx.fillText('Feb', 85, 170);
            ctx.fillText('Mar', 145, 170);
        }
    }

    // Theme toggle
    function initTheme() {
        $('#theme-toggle').click(function() {
            $('body').toggleClass('dark-mode');
            const isDark = $('body').hasClass('dark-mode');
            $(this).text(isDark ? '☀️' : '🌙');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            $('body').addClass('dark-mode');
            $('#theme-toggle').text('☀️');
        }
    }

    // Search functionality
    function initSearch() {
        $('#user-search').on('input', function() {
            const query = $(this).val().toLowerCase();
            $('.table tbody tr').each(function() {
                const text = $(this).text().toLowerCase();
                $(this).toggle(text.includes(query));
            });
        });
    }
});