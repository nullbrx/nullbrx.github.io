---
title: Thoughts on Terraform
date: "2018-08-04T23:46:37.121Z"
---

# Intro

[Terraform](https://www.terraform.io) is a popular infrastructure-as-code tool used to provision Cloud environments. While tools like Ansible and Puppet provide host-configuration, Terraform drastically reduces toil associated with manually provisioning machines and settings with providers, like AWS, GCP, GitLab,and [many others](https://registry.terraform.io/).

## Getting Started

For me, getting started with Terraform was somewhat difficult, because I didn't have extensive knowledge with code-based config management tools , such as Puppet or Ansible. Although Terraform [does not replace](https://logz.io/blog/terraform-ansible-puppet/)these tools, some core concepts proved to be universal, especially with modular code.

The true power of Terraform comes from writing modularized code. I highly suggest watching ["How to Build Reusable, Composable, Battle-Tested Terraform Modules"](https://www.youtube.com/watch?v=LVgP63BkhKQQ) talk from HashiConf to get a better understanding.

## The Joys of Automation

"Automation" occasionally [turns into a buzzword](https://xkcd.com/1319/), because it's not *always* a quick turnaround to solutions. I spent a week doing basic infrastructure (creating instances, standardizing environment naming schemes), and I still didn't have anything useful. However, the real investment showed when we wanted to re-create an instance of OS of every machine in the fleet, or renaming computers (maybe you want to call your computers chipotle.prod instead of qdoba.prod, I don't know.) It may be slow at first when creating modules initially, but it pays off when you need to do perform fleet-wide changes, or repetitive tasks.

I'm excited to see what modules an features Terraform brings in upcoming versions.

### Sidenotes

I would recommend reading [everything](https://blog.gruntwork.io/@brikis98) from here if you're getting started.