import { mkdir, copyFile, access, rm } from 'node:fs/promises'
import { execFile } from 'node:child_process'
import path from 'node:path'
import { promisify } from 'node:util'
import sharp from 'sharp'

const sourceDir = path.resolve(process.cwd(), '..')
const outputDir = path.resolve(process.cwd(), 'public/images')
const publicDir = path.resolve(process.cwd(), 'public')
const runCommand = promisify(execFile)

const imageJobs = [
  { input: 'LOGO.png', output: 'logo.webp', width: 900, quality: 82 },
  { input: 'my photo.jpg', output: 'hero-portrait.webp', width: 760, quality: 82 },
  { input: 'python.png', output: 'python.webp', width: 420, quality: 84 },
  { input: 'vue.png', output: 'vue.webp', width: 420, quality: 84 },
  { input: 'RCX.png', output: 'rcx.webp', width: 560, quality: 84 },
  { input: 'server maintainance.png', output: 'server-maintenance.webp', width: 1280, quality: 78 },
  { input: 'make PC.jpg', output: 'first-pc.webp', width: 900, quality: 78 },
  { input: 'arduino.JPG', output: 'assembled-pc.webp', width: 1080, quality: 80 },
  { input: 'DSC_5009.jpg', output: 'manhattan-bridge.webp', width: 1200, quality: 76 },
  { input: 'vessel.jpg', output: 'vessel.webp', width: 1200, quality: 76 },
  { input: 'jhu.jpg', output: 'jhu-campus.webp', width: 1000, quality: 76 },
  { input: 'Brooklyn.jpg', output: 'brooklyn-bridge.webp', width: 1280, quality: 74 },
  { input: 'Leaf.jpg', output: 'leaf-hangzhou.webp', width: 1200, quality: 76 },
  { input: 'Shibuya.jpg', output: 'shibuya.webp', width: 1200, quality: 76 },
  { input: 'Top of the rock.jpg', output: 'top-of-the-rock.webp', width: 1280, quality: 76 },
  { input: 'Tokyo.jpg', output: 'tokyo-blue-time.webp', width: 1200, quality: 76 },
  { input: 'Waitan.jpg', output: 'waitan.webp', width: 1100, quality: 76 },
  { input: 'Shanghai.jpg', output: 'shanghai-oriental-pearl.webp', width: 1080, quality: 76 },
  { input: 'razer.jpg', output: 'razer-review.webp', width: 1200, quality: 76 },
  { input: 'kitty.png', output: 'project-kitty.webp', width: 720, quality: 84 },
  { input: 'journal.png', output: 'project-python-trends.webp', width: 680, quality: 82 },
  { input: 'YOLO.png', output: 'project-yolo.webp', width: 447, quality: 84 },
  { input: 'programmer forum.bmp', output: 'project-coder-forum.webp', width: 554, quality: 82 },
  { input: 'xiangsheng.png', output: 'project-wechat.webp', width: 900, quality: 84 },
  { input: 'Hundsun.png', output: 'project-hundsun.webp', width: 920, quality: 84 },
  { input: 'WeChat QRCode.JPG', output: 'wechat-qr.webp', width: 540, quality: 84 },
]

const copyJobs = [
  { input: 'bilibili账号.svg', output: 'bilibili.svg' },
  { input: '足球.svg', output: 'soccer.svg' },
]

const rootCopyJobs = [
  { input: 'Resume.pdf', output: 'resume.pdf' },
  { input: 'icon.png', output: 'icon.png' },
]

const exists = async (target) => {
  try {
    await access(target)
    return true
  } catch {
    return false
  }
}

const run = async () => {
  await mkdir(outputDir, { recursive: true })
  await mkdir(publicDir, { recursive: true })

  for (const job of imageJobs) {
    const source = path.join(sourceDir, job.input)
    const output = path.join(outputDir, job.output)

    if (!(await exists(source))) {
      console.warn(`skip missing image: ${job.input}`)
      continue
    }

    try {
      await sharp(source)
        .rotate()
        .resize({ width: job.width, withoutEnlargement: true })
        .webp({ quality: job.quality, effort: 5 })
        .toFile(output)

      console.log(`optimized ${job.input} -> ${job.output}`)
    } catch (error) {
      if (job.input.toLowerCase().endsWith('.bmp')) {
        const tempPng = path.join(outputDir, `${path.parse(job.output).name}.tmp.png`)
        try {
          await runCommand('sips', ['-s', 'format', 'png', source, '--out', tempPng])
          await sharp(tempPng)
            .rotate()
            .resize({ width: job.width, withoutEnlargement: true })
            .webp({ quality: job.quality, effort: 5 })
            .toFile(output)
          console.log(`optimized ${job.input} (bmp fallback) -> ${job.output}`)
        } catch (fallbackError) {
          console.warn(`skip failed optimization: ${job.input}`, fallbackError)
        } finally {
          await rm(tempPng, { force: true })
        }
      } else {
        console.warn(`skip failed optimization: ${job.input}`, error)
      }
    }
  }

  for (const job of copyJobs) {
    const source = path.join(sourceDir, job.input)
    const output = path.join(outputDir, job.output)

    if (!(await exists(source))) {
      console.warn(`skip missing asset: ${job.input}`)
      continue
    }

    await copyFile(source, output)
    console.log(`copied ${job.input} -> ${job.output}`)
  }

  for (const job of rootCopyJobs) {
    const source = path.join(sourceDir, job.input)
    const output = path.join(publicDir, job.output)

    if (!(await exists(source))) {
      console.warn(`skip missing root asset: ${job.input}`)
      continue
    }

    await copyFile(source, output)
    console.log(`copied ${job.input} -> public/${job.output}`)
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
