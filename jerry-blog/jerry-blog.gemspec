# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jerry-blog"
  spec.version       = "0.1.0"
  spec.authors       = ["jerryshi"]
  spec.email         = ["jerryshi042003@gmail.com"]

  spec.summary       = "This theme is specifically engineered for Jerry's blog"
  spec.homepage      = "http://www.jerryhshi.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
