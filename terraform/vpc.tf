
resource "aws_vpc" "capstone" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name        = "aws-devops-capstone-vpc"
    Project     = "aws-devops-capstone"
    Environment = "capstone"
  }
}
