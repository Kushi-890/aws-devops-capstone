
resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.capstone.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "${var.aws_region}a"
  map_public_ip_on_launch = true

  tags = {
    Name        = "aws-devops-capstone-public-subnet"
    Project     = "aws-devops-capstone"
    Environment = "capstone"
  }
}
resource "aws_subnet" "private" {
  vpc_id            = aws_vpc.capstone.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "${var.aws_region}a"

  tags = {
    Name        = "aws-devops-capstone-private-subnet"
    Project     = "aws-devops-capstone"
    Environment = "capstone"
  }
}