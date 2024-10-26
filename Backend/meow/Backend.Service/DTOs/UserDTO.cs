﻿using Backend.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Service.DTOs
{
    public class CreateUserDTO
    {
        public string Username { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
        public string TimeZone { get; set; }
        public Roles Role { get; set; }
    }

    public class LoginUserDTO
    {
        public string UsernameOrEmail { get; set; }
        public string Password { get; set; }

    }
}
