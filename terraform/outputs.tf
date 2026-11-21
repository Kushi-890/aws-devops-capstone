output "vpc_id" {
  description = "ID of the capstone VPC"
  value       = aws_vpc.capstone.id
}

output "public_subnet_id" {
  description = "ID of the first public subnet"
  value       = aws_subnet.public.id
}

output "private_subnet_id" {
  description = "ID of the first private subnet"
  value       = aws_subnet.private.id
}

output "public_subnet_b_id" {
  description = "ID of the second public subnet"
  value       = aws_subnet.public_b.id
}

output "private_subnet_b_id" {
  description = "ID of the second private subnet"
  value       = aws_subnet.private_b.id
}