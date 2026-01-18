# README

- Created with `rails new react-on-rails --javascript=bun` to get transpilation and built-in testing
- Setup SSH GitHub integration
  - `ssh-keygen -t ed255519 -C 'bill@billgathen.com'`
    - save as `/Users/bill/.ssh/id_ed25519_github`
  - `eval "$(ssh-agent -s)"`
  - `ssh-add ~/.ssh/id_ed25519_github`
  - `pbcopy < ~/.ssh/id_ed25519_github.pub`
  - GitHub -> Settings -> SSH and GPG keys -> New SSH Key -> MacBook Pro - 2026
  - `ssh -T git@github.com` 
- Pin rdoc to Ruby 4 system default version by adding this to Gemfile (eliminates "already loaded" complaint when using `bin/dev`
  - `gem "rdoc", "= 7.0.3"`
  - `gem uninstall rdoc --version '7.1.0'`
  - `gem cleanup rdoc`

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
