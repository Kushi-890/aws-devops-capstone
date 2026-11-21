
variable "aws_region" {
  description = "AWS region for the capstone infrastructure"
  type        = string
  default     = "ap-south-1"
}
variable "eks_cluster_role_arn" {
  description = "IAM role ARN for the EKS cluster"
  type        = string
}

variable "eks_node_role_arn" {
  description = "IAM role ARN for EKS worker nodes"
  type        = string
}

variable "eks_public_access_cidrs" {
  description = "CIDR blocks allowed to access the EKS public endpoint"
  type        = list(string)
}
