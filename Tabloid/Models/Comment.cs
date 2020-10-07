using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Tabloid.Models;

namespace Tabloid.Models
{
    // these are the propertires of a comment
    public class Comment
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public UserProfile UserProfile { get; set; }
        public int UserProfileId { get; set; }

        [Required]
        public string Subject { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public DateTime CreateDateTime { get; set; }
         
    }
}
