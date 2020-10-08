using System;
<<<<<<< HEAD
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

=======
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


>>>>>>> master
namespace Tabloid.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }
<<<<<<< HEAD
        [Required(ErrorMessage ="Correct image location is required")]
=======
        [Required(ErrorMessage = "Correct image location is required")]
>>>>>>> master
        [DisplayName("Header Image URL")]
        [Url]
        public string ImageLocation { get; set; }

        public DateTime CreateDateTime { get; set; }

        [DisplayName("Published")]
        [DataType(DataType.Date)]
        public DateTime? PublishDateTime { get; set; }

        public bool IsApproved { get; set; }

        [Required]
        [DisplayName("Category")]
        public int CategoryId { get; set; }
<<<<<<< HEAD
        //public Category Category { get; set; }
=======
        public Category Category { get; set; }
>>>>>>> master

        [DisplayName("Author")]
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
<<<<<<< HEAD

        public int TagId { get; set; }
        public Tag Tag { get; set; }
        public List<Tag> Tags { get; set; }
=======
>>>>>>> master
    }
}
